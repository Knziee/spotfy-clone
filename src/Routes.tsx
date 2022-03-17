import { BrowserRouter, Routes as RoutesWrapper, Route} from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Premium from "./pages/Premium";

function Routes() {
    return (
    <BrowserRouter>
        <RoutesWrapper>
            <Route path='/' element={<Home/>} />
            <Route path='/Sobre' element={<Sobre/>} />
            <Route path='/Premium' element={<Premium/>} />
        </RoutesWrapper>
    </BrowserRouter>
    )
}

export default Routes