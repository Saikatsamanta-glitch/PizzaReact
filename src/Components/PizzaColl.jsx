import React from 'react';
import Cardpizz from './Cardpizz';

const PizzaColl = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>All your fav ❤ pizza here 😋</h2>
            <div className="grids mt-5">
                <Cardpizz img={`https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png`} name="Tomato Pizza"/>
                <Cardpizz img="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-27.png" name="Mushroom Pizza"/>
                <Cardpizz img="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-27.png" name="Mushroom Pizza"/>
                <Cardpizz img="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-27.png" name="Mushroom Pizza"/>
                <Cardpizz img="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-27.png" name="Mushroom Pizza"/>
                <Cardpizz img="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-27.png" name="Mushroom Pizza"/>
            </div>
        </div>
    );
}

export default PizzaColl;
