import './scss/app.scss'
import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import PizzaBlock from "./components/Pizza-block";

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

                        <PizzaBlock title="Мексиканская1" price="400"/>
                        {/*<PizzaBlock  title="4 сыра" price="400"/>*/}
                        {/*<PizzaBlock  title="Асорти" price="450"/>*/}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
