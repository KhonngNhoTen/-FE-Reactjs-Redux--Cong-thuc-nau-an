import React from 'react';
import './RecipeCard.css';
const RecipeCard = () => {
    return (
        <div className='card'>
            <img src="bc.jpg" alt='banh canh' />
            <div className='name'>Banh canh</div>
            <div className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dicta reiciendis quasi dolor eum voluptatibus?
            </div>
            <button>View Recipe</button>
        </div>
    );
};

export default RecipeCard;
