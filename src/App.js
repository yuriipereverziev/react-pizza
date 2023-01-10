import React from "react";

import './scss/app.scss'
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {Routes, Route} from "react-router-dom";

export const SearchContext = React.createContext()

function App() {
    const [searchValue, setSearchValue] = React.useState('')

    console.log(1)
    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/react-pizza" element={<Home/>} />
                            <Route path="/cart" element={<Cart/>} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </div>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
