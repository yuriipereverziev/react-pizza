import React from "react";

import './scss/app.scss'
import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import PizzaBlock from "./components/Pizza-block";

function App() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch('https://63a2ff7b9704d18da082a2d6.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Category/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>

                    <div className="content__items">
                        {items.map(obj => (
                            <PizzaBlock
                                key={obj.id}
                                title={obj.title}
                                price={obj.price}
                                image={obj.imageUrl}
                                size={obj.sizes}
                                type={obj.types}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
