import React from 'react'
const BurgerIngrideant = (props) => {
    let ingrideant = null;
    switch (props.type) {
        case ('bread-bottom'):
            ingrideant = <div style={{}}></div>;
            break;
        case ('bread-top'):
            ingrideant = <div style={{}}>
                <div style={seed1}></div>
                <div style={seed2}></div>
            </div>;
            break;
        case ('meat'):
            ingrideant = <div style={meat}>

            </div>
    }

};
export default BurgerIngrideant;