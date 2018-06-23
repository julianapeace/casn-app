import React, {Component} from "react";
import google_oauth_client_id from "../settings.js";
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

console.log(google_oauth_client_id)

class Login extends React.Component {
  render () {
    return (
      <div>
        <GoogleLogin
          clientId="330346076577-m3e4og8jcsenharj4vqaqfkhk19il76q.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }

}

export default Login;
