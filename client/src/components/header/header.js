import React, { useEffect } from 'react';
import './header.css';
import teamsLogo from '../../images/microsoft-teams-1.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout, logoutAuth } from '../../actions/auth';


const Header = ({ logout }) => {
    let token = localStorage.getItem('token');
    let profile = localStorage.getItem('profile');
    console.log(token)
    console.log(profile)
    return (
        <div className="header" >
            <div className="logo" >
                <img link="" src={teamsLogo} alt="teams_logo" />
                <span className="logo-text"> Microsoft <span style={{ color: 'black', fontWeight: '500' }}> Teams Clone </span> </span>
            </div>

            {token === '' && profile === '' ?
                <Button component={Link} to="/login" style={{ textTransform: 'none', fontSize: '1rem', fontWeight: '600', marginTop: '5px', marginBottom: '7px' }} size="large" variant="contained" color="primary">
                    Login
                </Button>
                :
                <Button onClick={logout} component={Link} to="/" style={{ textTransform: 'none', fontSize: '1rem', fontWeight: '600', marginTop: '5px', marginBottom: '7px' }} size="large" variant="contained" color="primary">
                    Logout
                </Button>
            }


        </div >
    )
};

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);