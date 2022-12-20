import React from "react";

function Category() {
    const [active, setActive] = React.useState(0)

    const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickCategory = (idx) => {
        setActive(idx)
    }
    return (
        <div className="categories">
            <ul>
                {
                    category.map((elem, idx) => (
                        <li onClick={() => onClickCategory(idx)} className={active === idx ? 'active' : ''}>
                            {elem}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category