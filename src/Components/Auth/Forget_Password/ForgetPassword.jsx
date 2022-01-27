import React, { useState } from 'react';
import { Auth, ConfigAuth } from '../index';
import { RoundButton, RoundButtonConstants } from '../../RoundButton';
import { InputText } from '../../InputText/InputText';
export const ForgetPassword = () => {
    const [config] = useState(
        new ConfigAuth(
            ['Forget', 'Password'],
            'Please enter new password.',
            [
                {
                    name: 'email',
                    component: <InputText type={'text'} placeholder={'Email'}></InputText>
                },
                {
                    name: 'new_password',
                    component: <InputText type={'password'} placeholder={'New Password'}></InputText>
                },
                {
                    name: 'confirm_new_password',
                    component: <InputText type={'password'} placeholder={'Confirm new Password'}></InputText>,
                },
            ],
            [
                <RoundButton type={RoundButtonConstants.ORANGE_BUTTON} onClick={submit}>Submit</RoundButton>,
                <RoundButton type={RoundButtonConstants.FADED_BUTTON} onClick={cancel}>Cancel</RoundButton>,
            ],

        )
    );
    function submit() {
        console.log('Sign In');
    }
    function cancel() {
        console.log('Sign In');
    }

    return (
        <Auth config={config}></Auth>
    );
};
