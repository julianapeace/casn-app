import React, {Component} from "react";

export default function Login(props) {

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

var styles = StyleSheet.create({
  header: {

    // remove width and height to override fixed static size
    height: 140,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#021227"

    }
  })
;
