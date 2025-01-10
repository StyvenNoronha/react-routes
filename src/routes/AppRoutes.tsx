import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";
import { Layout } from "../components/layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
