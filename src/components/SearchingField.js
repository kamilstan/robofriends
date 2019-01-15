import React from 'react';


const SearchingField = (props) => {

    return (
        <div className='pa2 ma2 bg-light-yellow shadow-4 br3'>
            <input className='bg-light-green br3 pa2 ma2 shadow-4' placeholder='SEARCH FOR ROBOTS' onChange={props.change}></input>

        </div>
    )
}


export default SearchingField;

