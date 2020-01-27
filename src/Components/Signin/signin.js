import React from 'react';
import { withRouter } from 'react-router-dom';
import Stylejs from './style';
import Logo from '../../assets/Images/ISC_logo.png'
import '../../assets/Style/Common.scss'

const Login = (props) => {
    return (
        <div className="Container-fluid login-background-color">
            <div className="login">
                <div className="login-picture">
                    <div className="image-portion fnt-poppins">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="login-form">
                    <form className="input-form">
                        <h2 className="Sign-in fnt-poppins">Sign in</h2>
                        <input className="has-margin-top-60 input-text flirt fnt-poppins" type="email" name="User" placeholder="Email" required />
                        <input className="input-text signin-input fnt-poppins" type="password" name="password" placeholder="Password" required />
                        <div className="custom-control checkbox-sigin-page custom-checkbox signin-checkbox">
                            <input id="checked" className="custom-control-input has-margin-top-5" type="checkbox" />
                            <label for="checked" className="custom-control-label" />
                            <div className="checkbox-data fnt-poppins has-margin-left-10">Remember me</div>
                        </div>
                        <div className="btns-of-add has-margin-left-40 has-margin-top-30 fnt-poppins">
                              <button className="cancel-btn-of-sigin fnt-poppins">Cancel</button>
                              <button className="Save-btn-of-signin has-margin-left-20 fnt-poppins">Signin</button>  
                        </div>
                    </form>
                </div>
            </div>
            <Stylejs />
        </div>);
};

export default withRouter(Login);
