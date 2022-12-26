import React from "react";

function Category({ value, onChangeCategory }) {
    const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {category.map((categoryName, i) => (
                    <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category