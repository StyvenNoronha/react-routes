import "./styles.css"

import { Outlet} from "react-router"

export function Layout(){
    return(
        <div>
            <header>
                <p>Olá, Styven</p>
            </header>
            <Outlet />
            <footer>
                Batata ter direitos legais
            </footer>
        </div>
    )
}