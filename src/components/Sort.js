import React from "react";
import arrow from '../assets/img/arrow.svg'
import {useSelector, useDispatch} from "react-redux";
import {setSort} from "../redux/slices/filterSlice";

const sortList = [
    {name: 'популярности ↑', sortProperty: 'rating'},
    {name: 'популярности ↓', sortProperty: '-rating'},
    {name: 'цене ↑', sortProperty: 'price'},
    {name: 'цене ↓', sortProperty: '-price'},
    {name: 'алфавиту ↑', sortProperty: 'title'},
    {name: 'алфавиту ↓', sortProperty: '-title'},
]


function Sort() {
    const dispatch = useDispatch()
    const sort = useSelector(state => state.filter.sort)
    const [open, setOpen] = React.useState(false)
    const sortRef = React.useRef()

    const onClickSort = (obj) => {
        dispatch(setSort(obj))
        setOpen(false)
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.path.includes(sortRef.current)) {
                setOpen(false)
                console.log('click outside')
            }
        }

        document.body.addEventListener('click', handleClickOutside)

        return () =>{
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <img src={arrow} alt="arrow"/>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{sort.name}</span>
            </div>

            {open && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, idx) => (

                            <li key={idx}
                                onClick={() => onClickSort(obj)}
                                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort