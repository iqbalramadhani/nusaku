import React, { Component } from "react";
import Router from 'next/router'

import ReactDOM from 'react-dom';
import { BaseUrl, NUSAKU_TOKEN } from '../constants/value' 

import  GoogleLogin from 'react-google-login';
 
export default class Google extends Component {
    state = {
        isLoggedIn: false,
        Token: "",
        googleId: "",
        name: "",
        email: "",
        picture: ""
      };
    
componentDidUpdate = () => {
        if(localStorage.getItem(NUSAKU_TOKEN)){
          Router.push('/')
        }
      };

responseGoogleTrue = (response) => {
  console.log(response);
  this.setState({
    isLoggedIn: true,
    Token: response.accessToken,
    googleId: response.googleId,
    name: response.profileObj.name,
    email: response.profileObj.email,
    picture: response.profileObj.imageUrl
  });
}

responseGoogleFalse = (response) => {
    console.log(response);
  
}

render () {
   let content;
    if (this.state.isLoggedIn) {

        content = (
          <div>
            <h4>Login google Berhasil</h4>
          </div>
        );
        localStorage.setItem(NUSAKU_TOKEN, this.state.Token)
              
      } else {
        content = (

            <GoogleLogin
                clientId="531401978818-40e7u81559b5ohb4n9kv69iug4n7irto.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogleTrue}
                onFailure={this.responseGoogleFalse}
                render={renderProps => (
                    <button onClick={renderProps.onClick} >Masuk Goolge (Belum Costum)</button>
                  )}
            />
                );
      }
    
    return <div>{content}</div>;

}

}
