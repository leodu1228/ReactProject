import React from 'react';
import '../style.css';

const Title = ({children}) => {
    return(
        <h1 style={{textAlign:"center", margin: "0 auto"}}>{children}</h1>
    )
}

export default Title;