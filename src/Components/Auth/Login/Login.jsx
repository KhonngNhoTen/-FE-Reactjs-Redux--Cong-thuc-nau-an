import React, { useState } from 'react';
import { Auth, ConfigAuth } from '../index';
import { RoundButton, RoundButtonConstants } from '../../RoundButton';
import { signIn } from '../../../Apis/userAPI'
import { InputText } from '../../InputText/InputText';
import { LinkText } from '../../LinkText';
import { useNavigate } from 'react-router-dom'
import ErrorTitle from '../../ErrorTitle/ErrorTitle';
export const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [config, setConfig] = useState(
        new ConfigAuth(
            ['Welcome', 'Back'],
            'Please enter information to continue.',
            [
                {
                    name: 'email',
                    component: 
                    <InputText 
                        type={'text'} 
                        placeholder={'Email'} 
                        onChange = { handleEmailOnchange }
                        // value = {email}
                    >
                    </InputText>
                },
                {
                    name: 'password',
                    component: 
                    <InputText 
                        type={'password'} 
                        placeholder={'Password'}
                        onChange ={e=> setPassword(e.target.value)}
                        // value = {password}
                        autocomplete
                    >

                    </InputText>,
                },
                {
                    name: 'error',
                    component: <></>,
                },
                {
                    name: 'forget_your_password',
                    component: <LinkText>Forget your password?</LinkText>
                },
            ],
            [
                <RoundButton type={RoundButtonConstants.ORANGE_BUTTON} onClick={signIn}>Sign In</RoundButton>,
                <RoundButton type={RoundButtonConstants.FADED_BUTTON} onClick={signUp}>Sign Up</RoundButton>,
            ]
        )
    );

    function handleEmailOnchange(e){
        console.log(e.target.value);
       setEmail(e.target.value);
       console.log(email);
    }

    function signIn() {
        console.log(email); 
        return;
        signIn({
            email,
            password
        })
            .then(
                r => navigate('/')
            )
            .catch(
                error => {
                    let configClone = {...config};
                    configClone.field[3] =  {
                        name: 'error',
                        component: <ErrorTitle>
                            `Email or password not correct!`
                        </ErrorTitle>,
                    }
                    setConfig (configClone);
                }
            );
    }
    function signUp() {
        console.log('Sign In');
    }

    return (
        <Auth config={config} />
    );
};
