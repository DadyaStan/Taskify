import { Outlet } from "react-router-dom";

import MenuComponent from "./Menu/MenuComponent";

import "./Layout.scss";

function Layout() {
    return (
        <div className="taskify">
            <MenuComponent />
            {/* Outlet нам нужен для фиксации "шапки, подвала..." 
            т.е. для обозначения статики и динамики */}
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
