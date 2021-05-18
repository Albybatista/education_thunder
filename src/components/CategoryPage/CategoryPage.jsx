import React, {useState, useContext} from 'react'
// import styles from '../CategoryPage/Category.module.css'
import TheContext from '../../context/index'

export default function CategoryPage() {

    const context = useContext(TheContext)


    const buttons = [
        {
            name: 'Animals',
            key: 'animal',
            value: 27
        },
        {
            name: 'Geograpghy',
            key: 'geograpghy',
            value: 22
        },
        {
            name: 'History',
            key: 'history',
            value: 23
        },
        {
            name: 'Math',
            key: 'math',
            value: 19
        },
        {
            name: 'Science',
            key: 'science',
            value: 17
        }
    ]

    const handleClick = (event) => {
        context.setCategoryNum(event.target.value)
        // window.location.href = '/main'
    }



    return(
        <div>
            {
                buttons.map(({name, key, value}) => {
                    return (
                        <button onClick={handleClick} value={value} key={key}>{name}</button>
                    )
                })
            }
        </div>
    )
}