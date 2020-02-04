import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Stylejs from './style';
import Logo from '../../assets/Images/ISC_logo.png'
import '../../assets/Style/Common.scss'
import axios from 'axios';
import cookie from 'react-cookies'
import {apiPath} from '../../Config'

const Signin = (props) => {
    let {history} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");

    const userAuthentication = e => {
        e.preventDefault();
        let payLoad = {Email: email, Password: password};
        axios.post(apiPath + "/adminLogin", payLoad).then(response => {
            localStorage.setItem("age", remember ? 1296000 : 86400);
            cookie.save('token', response.data.token, {maxAge: (remember ? 1296000 : 86400), path: "/"});
            history.push("/");
            setEmail("");
            setPassword("");
        })
            .catch(err => {
                if (err.message === "Request failed with status code 404") {
                    setError("Invalid Password");
                }
                else if (err.message === "Request failed with status code 500") {
                    setError("Email does not exist");
                }
            });
    };
    return (    
        <div className="Container-fluid login-background-color">
            <div className="login">
                <div className="login-picture">
                    <div className="image-portion fnt-poppins">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="login-form">
                    <form className="input-form" onSubmit={(event)=>userAuthentication(event)}>
                        <h2 className="Sign-in fnt-poppins">Sign in</h2>
                        <input className="has-margin-top-60 input-text flirt fnt-poppins" type="email" name="User" placeholder="Email" required
                            onChange={event=>setEmail(event.target.value)}
                        />
                        <input className="input-text signin-input fnt-poppins" type="password" name="password" placeholder="Password" required
                            onChange={event=>setPassword(event.target.value)}
                        />
                        <div className="custom-control checkbox-sigin-page custom-checkbox signin-checkbox">
                            <input id="checked" className="custom-control-input has-margin-top-5" type="checkbox" 
                            onChange={event=>setRemember(event.target.checked)}
                            checked={remember}
                            />
                            <label for="checked" className="custom-control-label" />
                            <div className="checkbox-data fnt-poppins has-margin-left-10">Remember me</div>
                        </div>
                        <div className="btns-of-add has-margin-left-40 has-margin-top-30 fnt-poppins">
                              <button className="cancel-btn-of-sigin fnt-poppins">Cancel</button>
                              <button className="Save-btn-of-signin has-margin-left-20 fnt-poppins" type="submit">Signin</button>  
                        </div>
                    </form>
                </div>
            </div>
            <Stylejs />
        </div>);
};
export default withRouter(Signin);
