import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import axios from "axios";
import Category from "../components/Category";
import Sort from "../components/Sort";
import Skeleton from "../components/Pizza-block/Skeleton";
import PizzaBlock from "../components/Pizza-block";
import {SearchContext} from "../App";
import {setCategoryId} from "../redux/slices/filterSlice";

const Home = () => {
    const dispatch = useDispatch()
    const {categoryId, sort} = useSelector((state) => state.filter)

    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }


    React.useEffect(() => {
        setIsLoading(true)

        const sortBy = sort.sortProperty.replace('-', '')
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios.get(`https://63a2ff7b9704d18da082a2d6.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)

            })
        window.scrollTo(0, 0)
    }, [categoryId, sort.sortProperty, searchValue])


    return (
        <>
            <div className="content__top">

                <Category value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>

            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map((obj => (
                        <PizzaBlock
                            key={obj.id}
                            id={obj.id}
                            title={obj.title}
                            price={obj.price}
                            image={obj.imageUrl}
                            size={obj.sizes}
                            type={obj.types}
                        />
                    )))}
            </div>
        </>
    );
};

export default Home;
