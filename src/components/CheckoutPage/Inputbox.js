import React from 'react';

function InputDetails ({cardfield ,inputType ,placeholder}) {
    return(
        <div className={cardfield}>
           <input type={inputType} placeholder={placeholder}/>
        </div>
    )
}
export default InputDetails ;