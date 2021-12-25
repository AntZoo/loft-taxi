import React from "react";

export const Login = (props) => {
    return <><form>
        <input id='email' name='email' type='email' />
        <input id='password' name='password' type='password' />

        <button type='button' onClick={() => {
            console.log('logged in');
            props.loginFunc();
            props.navFunc('map');
        }}>Логин</button>]
        <button type='button' onClick={() => {
            console.log('register');
            props.navFunc('registration');
        }}>Зарегистрироваться</button>]
        </form></>
}