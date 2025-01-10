import { Routes, Route } from "react-router";
import { Home } from "../pages/home";
import { Product } from "../pages/Product";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";



export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/product" element={<Product/>}/>
            <Route path="/details/:id" element={<Details/>}/>


            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}