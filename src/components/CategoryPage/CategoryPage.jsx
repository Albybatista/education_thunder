import React, {useState} from 'react'
// import styles from '../CategoryPage/Category.module.css'

export default function CategoryPage() {
    const [choice, setChoice] = useState()


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
        setChoice(event.target.value)
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