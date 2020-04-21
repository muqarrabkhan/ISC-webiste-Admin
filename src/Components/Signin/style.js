import React from 'react'
export default () => (
    <style js="true">{`
     
    .login-background-color {
        background-color: #fcfcfc;
        min-height: 820px;
    }

    .login-background-color .login-form {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        width: 450px;
        height: 605px;
        webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
        box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        margin-left: -5px;
    }
      
    
.login-background-color .login-picture{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 450px;
    height: 605px;
    object-fit: contain;
    webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    box-shadow: 1px 6px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    background-color:#4379E9;
}

.login-background-color .login {
    display: flex;
    justify-content: center;
    padding-top: 6%;
}
.input-form .Sign-in {
    width: 168px;
    height: 60px;
    font-size: 49px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;
    text-align: left;
    color: #091022;
    margin-top: 65px;
    margin-left: 74px;
}
.input-text {
    opacity: 78%;
    padding-left: 12px;
    height: 50px;
    width: 329px;
    font-size: 20px;
    margin-top: 20px;
    border: 1px solid #e8e8e8;
}
.main-div-of-button{
    display: flex;
    justify-content: center;
}
.image-portion{
    display: flex;
    justify-content: center;
    padding-top: 47%;
}

.checkbox-sigin-page{
    margin-top: 7px;
}
::placeholder {
    color:#091022!important;
    
}
.flirt.form-control {
    margin-top: 72px;    
}
form.input-form {
    
    margin-left: 75px;
}
.login .login-picture .image-portion h1 {
    text-align: center;
    padding-top: 45%;
    color: #ffffff;
    font-size: 57px;
    opacity: 78%;
    margin-left: 10px;
}       
.signin-checkbox {
    display: flex;
    padding-left: 0px;
    padding-right: 30px;
    padding-top: 7%;
}
.cancel-btn-of-sigin{
    width: 114px;
    height: 39px;
    border-radius: 4px;
    border: 1px solid #989ca8;
    font-size:15px;
}
.Save-btn-of-signin{
    width: 114px;
    height: 39px;
    border-radius: 4px;
    border: 1px solid #4379E9;
    background: #4379E9;
    color: #fff;    
    font-size:15px;
}
.signin-forgrt-password {
    justify-content: flex-end;
    flex: 2;
    display: flex;
}
.span-btn-style{
    padding: 6px 27px 10px 27px;
}
    `}

    </style>
);