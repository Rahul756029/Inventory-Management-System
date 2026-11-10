import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

// Products
import Products from "../pages/Products/Products";
import AddProduct from "../pages/AddProduct/AddProduct";
import EditProduct from "../pages/EditProduct/EditProduct";

// Categories
import Categories from "../pages/Categories/Categories";
import AddCategory from "../pages/AddCategory/AddCategory";
import EditCategory from "../pages/EditCategory/EditCategory";

// Suppliers
import Suppliers from "../pages/Suppliers/Suppliers";
import AddSupplier from "../pages/AddSupplier/AddSupplier";
import EditSupplier from "../pages/EditSupplier/EditSupplier";

// Orders
import Orders from "../pages/Orders/Orders";
import AddOrder from "../pages/AddOrder/AddOrder";
import EditOrder from "../pages/EditOrder/EditOrder";

// Stock
import Stock from "../pages/Stock/Stock";
import AddStock from "../pages/AddStock/AddStock";
import EditStock from "../pages/EditStock/EditStock";

// Other Pages
import Reports from "../pages/Reports/Reports";
import Users from "../pages/Users/Users";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Product Routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />

        {/* Category Routes */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/add" element={<AddCategory />} />
        <Route path="/categories/edit/:id" element={<EditCategory />} />

        {/* Supplier Routes */}
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/suppliers/add" element={<AddSupplier />} />
        <Route path="/suppliers/edit/:id" element={<EditSupplier />} />

        {/* Order Routes */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/add" element={<AddOrder />} />
        <Route path="/orders/edit/:id" element={<EditOrder />} />

        {/* Stock Routes */}
        <Route path="/stock" element={<Stock />} />
        <Route path="/stock/add" element={<AddStock />} />
        <Route path="/stock/edit/:id" element={<EditStock />} />

        {/* Other Routes */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;