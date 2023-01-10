import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import Category from "../components/Category";
import Sort from "../components/Sort";
import Skeleton from "../components/Pizza-block/Skeleton";
import PizzaBlock from "../components/Pizza-block";
import {SearchContext} from "../App";
import {setCategoryId} from "../redux/slices/filterSlice";

const Home = () => {
    const dispatch = useDispatch()
    const categoryId = useSelector((state) =>  state.filter.categoryId)

    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    // const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://63a2ff7b9704d18da082a2d6.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
                window.scrollTo(0, 0)
            })
    }, [categoryId, sortType, searchValue])


    return (
        <>
            <div className="content__top">
                <Category value={categoryId} onChangeCategory={onChangeCategory}/>

                <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map((obj => (
                        <PizzaBlock
                            key={obj.id}
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
