import { Outlet } from "react-router-dom";
import HeaderComponenet from "./HeaderComponent";
import FooterComponenet from "./FooterComponent";

const RootComponent = () => {
    return (
        <>
            <HeaderComponenet />
            <main>
                <div className="container d-flex flex-column min-vh-100">
                    <Outlet />
                </div>
            </main>
            <FooterComponenet />
        </>
    )
}

export default RootComponent;