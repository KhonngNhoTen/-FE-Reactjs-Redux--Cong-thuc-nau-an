import React, { useState } from 'react';
import { Auth, ConfigAuth } from '../index';
import { RoundButton, RoundButtonConstants } from '../../RoundButton';
import { InputText } from '../../InputText/InputText';
export const Register = () => {
    const [config] = useState(
        new ConfigAuth(
            ['New', 'Account'],
            'Create a new account.',
            [
                {
                    name: 'email',
                    component: <InputText type={'text'} placeholder={'Email'}></InputText>
                },
                {
                    name: 'password',
                    component: <InputText type={'password'} placeholder={'Password'}></InputText>,
                },
                {
                    name: 'confirm_password',
                    component: <InputText type={'password'} placeholder={'Confirm Password'}></InputText>,
                },
            ],
            [
                <RoundButton type={RoundButtonConstants.ORANGE_BUTTON} onClick={signUp}>Sign Up</RoundButton>,
                <RoundButton type={RoundButtonConstants.FADED_BUTTON} onClick={signIn}>Sign In</RoundButton>,
            ],

        )
    );
    function signIn() {
        console.log('Sign In');
    }
    function signUp() {
        console.log('Sign In');
    }

    return (
        <Auth config={config}></Auth>
    );
};
