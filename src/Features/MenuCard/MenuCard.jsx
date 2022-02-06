import React from 'react';
import './MenuCard.css';
const MenuCard = () => {
    return (
        <div className='card'>
            <i className= "fas fa-folder"></i>
            <div className='name'>Name....</div>
            <div className='more'><i class="fas fa-ellipsis-v"></i></div>

        </div>
    );
};

export default MenuCard;
