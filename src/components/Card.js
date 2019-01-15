import React from 'react';

const Card = (props) => {
    return (
        <div className='card dib bg-light-blue pa3 ma3 grow shadow-4 br4 tc f5 '>
            <img alt='robot' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>

        </div>
    )

}

export default Card