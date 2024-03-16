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
import NavBar from './components/NavBar';
import StoreFront from './modules/customer/pages/StoreFront';
import CustomerOrders from './modules/customer/pages/Orders';
import CheckoutPage from './modules/customer/pages/Checkout';
import ProductDetails from './modules/customer/pages/ProductDetails';

const App = () => {
  const navigate = useNavigate();

  return (
    <Provider store={store}>
      <NextUIProvider navigate={navigate}>
        <Toaster />
        <div >
          {['/store/home', '/store/products', '/store/orders', '/store/categories'].includes(window.location.pathname) ?
            <>
              <SideNav />
              <div className="max-w-screen h-screen overflow-auto flex">
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
                    </Routes>
                  </div>
                </div>
              </div>
            </>
            : <>
              <NavBar />
              <div className="max-w-screen-lg mx-auto h-screen overflow-auto flex">
                <div className="w-full h-full p-4">
                  <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Routes>
                      <Route
                        path="/customer/orders"
                        element={
                          <CustomerOrders />
                        }
                      />
                      <Route
                        path="/products"
                        element={
                          <StoreFront />
                        }
                      />
                      <Route
                        path="/customer/checkout"
                        element={
                          <CheckoutPage />
                        }
                      />
                      <Route
                        path="/product/details"
                        element={
                          <ProductDetails />
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            </>}
          {/* {['/customer/home', '/customer/products', '/customer/orders', '/customer/categories'].includes(window.location.pathname) ?  : null} */}


        </div>
      </NextUIProvider>
    </Provider>
  );
}
export default App;



