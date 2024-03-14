import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './modules/merchant/components/Header';
import ProtecteRoute from './utils/ProtecteRoute';
import HomePage from './modules/merchant/pages/Home';
import LoginPage from './modules/merchant/pages/Login';
import { Toaster } from "react-hot-toast";
import {NextUIProvider} from "@nextui-org/react";
import Products from './modules/merchant/pages/Products';
import Orders from './modules/merchant/pages/Orders';
import Categories from './modules/merchant/pages/Categories';

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Toaster />
        <div className="max-w-screen overflow-auto">
          <Routes>
            <Route
              path="store/home"
              element={
                <HomePage />
              }
            />
            <Route
              path="store/products"
              element={
                <Products />
              }
            />
            <Route
              path="store/orders"
              element={
                <Orders />
              }
            />
            <Route
              path="store/categories"
              element={
                <Categories />
              }
            />
            {['store/login', '/store'].map(path => <Route key={path} path={path} element={<LoginPage />} />)}
          </Routes>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
}
export default App;



