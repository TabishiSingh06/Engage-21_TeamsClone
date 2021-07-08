import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register, login } from '../../actions/auth';
import PropTypes from 'prop-types';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/button';
import Icon from './icon';
import './FormLogin.css';
import left from '../../images/left.png';
import right from '../../images/right.png';
import {
    AUTH,
} from '../../actions/types';

const iconStyle = {
    height: "1.5rem",
    width: "1.5rem",
    color: "#acacac",
    alignSelf: "center",
    marginLeft: "12px",
}


const FormLogin = ({ setAlert, register, login, isAuthenticated }) => {
    const [isSignup, setisSignup] = useState(false);
    const [isSwitchon, setisSwitchon] = useState(false);
    const [isSignIn, setisSignIn] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const dispatch = useDispatch();
    const { name, email, password, confirmPassword } = formData;


    const onClickNewHere = () => {
        setisSignup(true);
        setisSignIn(false);
        setisSwitchon(!isSwitchon);
    };
    const onClickOneOfUs = () => {
        setisSignIn(true);
        setisSignup(false);
        setisSwitchon(!isSwitchon);
    };

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmitRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        login({ email, password });
    };

    if (isAuthenticated) {
        return <Redirect to="/videoapp" />
    }

    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;


        try {
            dispatch({
                type: 'AUTH', data: { result, token }
            });

        } catch (error) {
            console.log(error);
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/videoapp" />
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccesful. Try Again.")
    };

    return (
        <div className={isSwitchon ? "container sign-up-mode" : "container"}>
            <div className="forms-container">
                <div className={isSwitchon ? "signin-signup sign-up-mode" : "signin-signup"}>
                    <form onSubmit={e => onSubmitLogin(e)} className="sign-in-form">
                        <h2 className="title"> Sign In</h2>
                        <div className="input-field">
                            <MailOutlineIcon style={iconStyle} ></MailOutlineIcon>
                            <input name="email" type="text" placeholder="Email" onChange={onChange} />

                        </div>
                        <div className="input-field">
                            <LockIcon style={iconStyle}></LockIcon>
                            <input
                                minLength='6'
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={onChange} />

                        </div>
                        <input type="submit" value="Login" class="btn solid" />
                        <p style={{ paddingBottom: '10px' }}> or</p>
                        <GoogleLogin
                            clientId="746042491743-i29monjn549pniccel0pffrr62gsl3ug.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                    style={
                                        {
                                            textTransform: 'none',
                                            width: '250px',
                                        }
                                    }
                                    color="primary"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant='contained'>
                                    LogIn with Google
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />

                    </form>
                    <form onSubmit={e => onSubmitRegister(e)} className="sign-up-form">
                        <h2 className="title"> Sign Up</h2>
                        <div className="input-field">
                            <PersonIcon style={iconStyle} ></PersonIcon>
                            <input name="name" type="text" placeholder="Name" onChange={onChange} />
                        </div>
                        <div className="input-field">
                            <MailOutlineIcon style={iconStyle} ></MailOutlineIcon>
                            <input name="email" type="text" placeholder="Email" onChange={onChange} />

                        </div>
                        <div className="input-field">
                            <LockIcon style={iconStyle}></LockIcon>
                            <input minLength='6' name="password" type="password" placeholder="Password" onChange={onChange} />

                        </div>
                        <div className="input-field">
                            <LockIcon style={iconStyle}></LockIcon>
                            <input name="confirmPassword" type="password" placeholder="Confirm password" onChange={onChange} />

                        </div>
                        <input type="submit" value="Sign Up" class="btn solid" />
                        <p style={{ paddingBottom: '10px' }}> or</p>
                        <GoogleLogin
                            clientId="746042491743-i29monjn549pniccel0pffrr62gsl3ug.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                    style={
                                        {
                                            textTransform: 'none',
                                            width: '250px',
                                        }
                                    }
                                    color="primary"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant='contained'>
                                    SignUp with Google
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />

                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>

                        <button className="btn transparent" id="sign-up-btn" onClick={onClickNewHere} >
                            Sign up
                        </button>
                    </div>
                    <img src={left} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>

                        <button className="btn transparent" id="sign-in-btn" onClick={onClickOneOfUs}>
                            Sign in
                        </button>
                    </div>
                    <img src={right} className="image" alt="" />
                </div>
            </div>
        </div >
    );
};

FormLogin.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register, login })(FormLogin);
