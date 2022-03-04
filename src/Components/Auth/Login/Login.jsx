import React, { useState } from 'react';
import { Auth, ConfigAuth } from '../index';
import { RoundButton, RoundButtonConstants } from '../../RoundButton';
import { signIn as login } from '../../../Apis/userAPI'
import { InputText } from '../../InputText/InputText';
import { LinkText } from '../../LinkText';
import { useNavigate } from 'react-router-dom'
import ErrorTitle from '../../ErrorTitle/ErrorTitle';
import { saveAllToken } from '../../../Utils/StoreToken';
export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleEmailOnchange(e) {
        setEmail(e.target.value);
        setError('');
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        setError('');
    }

    async function signIn() {
        await login({
            email,
            password
        })
            .then(
                (rs) => {
                    if (rs.success) {
                        saveAllToken(rs.token, rs.refeshToken);
                        navigate('/');
                    } else
                        setError('Email or password not correct.')
                }
            )
            .catch(
                (error) => {
                    setError('Internal Server Error.')
                }
            );
    }
    function signUp() {
        console.log('Sign In');
    }

    return (
        <Auth
            heading={['Welcome', 'Back']}
            contentHeading={'Please enter information to continue.'}
            field={[
                {
                    name: 'email',
                    component:
                        <InputText
                            type={'text'}
                            placeholder={'Email'}
                            onChange={handleEmailOnchange}
                        >
                        </InputText>
                },
                {
                    name: 'password',
                    component:
                        <InputText
                            type={'password'}
                            placeholder={'Password'}
                            onChange={handlePasswordChange}
                            autocomplete
                        >

                        </InputText>,
                },
                {
                    name: 'error',
                    component: error === '' ? <></> :
                        <ErrorTitle>{error}</ErrorTitle>,
                },
                {
                    name: 'forget_your_password',
                    component: <LinkText>Forget your password?</LinkText>
                },
            ]}
            footer={[
                <RoundButton type={RoundButtonConstants.ORANGE_BUTTON} onClick={signIn}>Sign In</RoundButton>,
                <RoundButton type={RoundButtonConstants.FADED_BUTTON} onClick={signUp}>Sign Up</RoundButton>,
            ]}

        />
    );
};
