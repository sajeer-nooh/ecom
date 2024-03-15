import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './modules/merchant/pages/Home';
import LoginPage from './modules/merchant/pages/Login';
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import Products from './modules/merchant/pages/Products';
import Orders from './modules/merchant/pages/Orders';
import Categories from './modules/merchant/pages/Categories';
import { Provider } from 'react-redux';
import { store } from './redux';
import SideNav from './components/SideNav';

const App = () => {
  const navigate = useNavigate();

  return (
    <Provider store={store}>
      <NextUIProvider navigate={navigate}>
          <Toaster />
          <div className="max-w-screen h-screen overflow-auto flex">
            {['/store/home', '/store/products', '/store/orders', '/store/categories'].includes(window.location.pathname) ? <SideNav /> : null}
            <div className="w-full h-full p-4 sm:ml-64">
              <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <Routes>
                  <Route
                    path="/store/home"
                    element={
                      <Home />
                    }
                  />
                  <Route
                    path="/store/products"
                    element={
                      <Products />
                    }
                  />
                  <Route
                    path="/store/orders"
                    element={
                      <Orders />
                    }
                  />
                  <Route
                    path="/store/categories"
                    element={
                      <Categories />
                    }
                  />
                  {['/store/login', '/store'].map(path => <Route key={path} path={path} element={<LoginPage />} />)}
                </Routes>
              </div>
            </div>
          </div>
      </NextUIProvider>
    </Provider>
  );
}
export default App;



