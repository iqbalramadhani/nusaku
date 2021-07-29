import React, { Component } from "react";
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { BaseUrl, NUSAKU_TOKEN } from '../constants/value' 

// import Router from 'next/router';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    Token: "",
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  componentDidUpdate = () => {
    if(localStorage.getItem(NUSAKU_TOKEN)){
      Router.push('/')
    }
  };

  responseFacebook = response => {
   console.log(response);

    this.setState({
      isLoggedIn: true,
      Token: response.accessToken,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  console.log(this.state);
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {

      fbContent = (
        <div>
          <h4>Login Facebook Berhasil</h4>
        </div>
      );
      localStorage.setItem(NUSAKU_TOKEN, this.state.Token)
            
    } else {
      fbContent = (
<FacebookLogin
        appId="899545216907333"
        autoLoad
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
      render={renderProps => (
    <button onClick={renderProps.onClick} >Masuk Facebook (Belum Costum)</button>
  )}
/>
      );
    }

    return <div>{fbContent}</div>;
  }
}