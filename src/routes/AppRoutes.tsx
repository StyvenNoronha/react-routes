import { Routes, Route } from "react-router";
import { Home } from "../pages/home";
import { Product } from "../pages/Product";



export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/product" element={<Product/>}/>
        </Routes>
    )
}