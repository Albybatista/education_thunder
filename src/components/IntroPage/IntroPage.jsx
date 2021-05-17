import React from 'react';
import {Link} from 'react-router-dom'


export default function IntroPage(props) {
    return (
        <div>
            <h1>This is the {props.page}</h1>
            <Link to='/main'>
                <button>Play!</button>
            </Link>
        </div>
    )
}