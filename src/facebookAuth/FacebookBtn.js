import React, {Component, useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import FacebookAuth from 'react-facebook-auth';
import {createSvgIcon, FacebookLoginButton} from "react-social-login-buttons";
import {createButton} from "react-social-login-buttons";

/**
 * @throw in console ==> {index.js:1 The method FB.login can no longer be called from http pages.}
 * @Decision ==> Should Use https:// instead http://
 */
const FacebookBtn = () => {

    const API_ID = "535677650439058"

    const [accessToken, setAccessToken] = useState("");

    const responseFacebook = (response) => {
        console.log("responseFacebookAccessToken: ", response.accessToken); // for testing
        setAccessToken(response.accessToken);
    }

    /** Method for testing. */
    const componentClicked = (data) => {
        console.log("DATA", data)
    }

    const authenticate = (response) => {
        console.log("authenticateResponse: ", response);// for testing
        // Api call to server so we can validate the token
        setAccessToken(response.accessToken);
    };

    const config = {
        activeStyle: {background: '#293e69'},
        icon: createSvgIcon(Icon),
        style: {background: '#3b5998', width: ""},
        text: 'Login with Facebook'
    };

    function Icon({width, height, color}) {
        return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 90 90">
            <g>
                <path
                    d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"
                    fill={color}/>
            </g>
        </svg>);
    }

    /** My Facebook login button. */
    const MyFacebookLoginButton = createButton(config);

    return (
        <div>
            <br/>
            <FacebookAuth  // #1 option of login button.
                appId={API_ID}
                callback={authenticate}
                component={MyFacebookLoginButton}
            />
            <br/>
            <FacebookLogin  // #2 option of login button.
                appId={API_ID}
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}/>
        </div>
    )
}

export default FacebookBtn;