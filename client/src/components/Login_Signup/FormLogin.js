import LockIcon from '@material-ui/icons/Lock';
import AlternateEmail from '@material-ui/icons/Person';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import React, { Component } from 'react';
import './FormLogin.css';
import left from '../../images/left.png';
import right from '../../images/right.png';

const iconStyle = {
    height: "1.5rem",
    width: "1.5rem",
    color: "#acacac",
    alignSelf: "center",
    marginLeft: "12px",
}

class FormLogin extends Component {
    state = {
        isSwitchon: false
    }

    render() {
        return (

            <div className={this.state.active ? "container sign-up-mode" : "container"}>
                <div className="forms-container">
                    <div className={this.state.active ? "signin-signup sign-up-mode" : "signin-signup"}>
                        <form action=" " className="sign-in-form">
                            <h2 className="title"> Sign In</h2>
                            <div className="input-field">
                                <MailOutlineIcon style={iconStyle} ></MailOutlineIcon>
                                <input type="text" placeholder="Email" />

                            </div>
                            <div className="input-field">
                                <LockIcon style={iconStyle}></LockIcon>
                                <input type="password" placeholder="Password" />

                            </div>
                            <input type="submit" value="Login" class="btn solid" />
                            <p className="social-text">Or Sign in with Google</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <LockIcon></LockIcon>
                                </a>
                            </div>
                        </form>
                        <form action=" " className="sign-up-form">
                            <h2 className="title"> Sign Up</h2>
                            <div className="input-field">
                                <PersonIcon style={iconStyle} ></PersonIcon>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="input-field">
                                <MailOutlineIcon style={iconStyle} ></MailOutlineIcon>
                                <input type="text" placeholder="Email" />

                            </div>
                            <div className="input-field">
                                <LockIcon style={iconStyle}></LockIcon>
                                <input type="password" placeholder="Password" />

                            </div>
                            <input type="submit" value="Sign Up" class="btn solid" />

                            <p className="social-text">Or Sign in with Google</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <LockIcon></LockIcon>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>

                            <button className="btn transparent" id="sign-up-btn" onClick={() => this.setState({ active: !this.state.active })} >
                                Sign up
                            </button>
                        </div>
                        <img src={left} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>

                            <button className="btn transparent" id="sign-in-btn" onClick={() => this.setState({ active: !this.state.active })}>
                                Sign in
                            </button>
                        </div>
                        <img src={right} className="image" alt="" />
                    </div>
                </div>
            </div >
        )
    }
};

export default FormLogin;
