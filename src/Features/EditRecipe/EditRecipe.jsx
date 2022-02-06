import React from 'react';
import InputText from '../../Components/InputText';
import { RoundButton, RoundButtonConstants } from '../../Components/RoundButton';
import TextArea from '../../Components/TextArea'
import './EditRecipe.css';

const EditRecipe = () => {
  return (
    <div className='background'>
      <div className='card-edit'>
        <img src="bc.jpg" alt='food-img' />
        <div className='info'>
          <InputText placeholder='Name' type='text' />
          <TextArea placeholder='Description...'/>
          <InputText placeholder='Recipe' type='text' />
          <TextArea placeholder='Doing...'/>
        </div>

        <div className='footer'>
           <RoundButton 
             type={RoundButtonConstants.ORANGE_BUTTON} 
            >
             Save
           </RoundButton>   
           <RoundButton
              type={RoundButtonConstants.FADED_BUTTON}
            >
              Cancel
            </RoundButton>   
        </div>
      </div>
    </div>
  )
};

export default EditRecipe;
