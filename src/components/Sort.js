import React from "react";
import arrow from '../assets/img/arrow.svg'

function Sort({ value, onChangeSort }) {
    const [open, setOpen] = React.useState(false)

    const sortList = [
        { name: 'популярности ↑', sortProperty: 'rating' },
        { name: 'популярности ↓', sortProperty: '-rating' },
        { name: 'цене ↑', sortProperty: 'price' },
        { name: 'цене ↓', sortProperty: '-price' },
        { name: 'алфавиту ↑', sortProperty: 'title' },
        { name: 'алфавиту ↓', sortProperty: '-title' },
    ]

    const onClickSort = (obj) => {
        onChangeSort(obj)
        setOpen(false)
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <img src={arrow} alt="arrow"/>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{value.name}</span>
            </div>

            {open && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, idx) => (

                            <li key={idx}
                                onClick={() => onClickSort(obj)}
                                className={value.sortProperty === obj.sortProperty ? 'active' : ''}
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