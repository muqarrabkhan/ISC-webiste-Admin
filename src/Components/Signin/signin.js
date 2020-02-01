import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Stylejs from './style';
import Logo from '../../assets/Images/ISC_logo.png'
import '../../assets/Style/Common.scss'
import {useMutation} from '@apollo/react-hooks';
import {LOGIN_USER} from '../apollo/queries'
import cookie from 'react-cookies'


const Signin = (props) => {
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [remember,setRemeber]=useState(false);
    const [btnText,setBtnText]=useState("Signin");
    const [loginAdmin]=useMutation(LOGIN_USER);
    
    const login=(event)=>{
        event.preventDefault();
        if(email === "")
        {
            return;
        }
        if(password === ""){
            return;
        }   
        loginAdmin({
            variables: {
                email: email,
                password: password
            }
        }).then(res=>{
            if (res.data.adminLogin.response !== "incorrect credentials") {
                setBtnText("LOADING...");
                localStorage.setItem("age",remember ? 1296000 : 86400);
                cookie.save('token',res.data.adminLogin.response, {maxAge : (remember ? 1296000 : 86400),path: "/"});
                window.location.reload();                         
            }
            else {
                setBtnText("Sigin")
                window.confirm('email or password is incorrect');
            }
        })
    }
    return (    
        <div className="Container-fluid login-background-color">
            <div className="login">
                <div className="login-picture">
                    <div className="image-portion fnt-poppins">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="login-form">
                    <form className="input-form" onSubmit={(event)=>login(event)}>
                        <h2 className="Sign-in fnt-poppins">Sign in</h2>
                        <input className="has-margin-top-60 input-text flirt fnt-poppins" type="email" name="User" placeholder="Email" required
                            onChange={event=>setEmail(event.target.value)}
                        />
                        <input className="input-text signin-input fnt-poppins" type="password" name="password" placeholder="Password" required
                            onChange={event=>setPassword(event.target.value)}
                        />
                        <div className="custom-control checkbox-sigin-page custom-checkbox signin-checkbox">
                            <input id="checked" className="custom-control-input has-margin-top-5" type="checkbox" 
                            onChange={event=>setRemeber(event.target.checked)}
                            checked={remember}
                            />
                            <label for="checked" className="custom-control-label" />
                            <div className="checkbox-data fnt-poppins has-margin-left-10">Remember me</div>
                        </div>
                        <div className="btns-of-add has-margin-left-40 has-margin-top-30 fnt-poppins">
                              <button className="cancel-btn-of-sigin fnt-poppins">Cancel</button>
                              <button className="Save-btn-of-signin has-margin-left-20 fnt-poppins" type="submit">{btnText}</button>  
                        </div>
                    </form>
                </div>
            </div>
            <Stylejs />
        </div>);
};
export default withRouter(Signin);
