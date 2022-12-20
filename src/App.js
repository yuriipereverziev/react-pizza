import './scss/app.scss'
import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import PizzaBlock from "./components/Pizza-block";
import pizzas from "./assets/pizzas.json"

function App() {
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
                        {
                            pizzas.map(obj => (
                                <PizzaBlock
                                    title={obj.title}
                                    price={obj.price}
                                    image={obj.imageUrl}
                                    size={obj.sizes}
                                    type={obj.types}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
