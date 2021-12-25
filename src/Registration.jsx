import React from "react";

export const Registration = (props) => {
    return <><form>
    <input id='email' name='email' type='email' />
    <input id='password' name='password' type='password' />

    <button type='button' onClick={() => {
        console.log('register');
        props.loginFunc();
        props.navFunc('map');
    }}>Зарегистрироваться</button>]
    </form></>
}