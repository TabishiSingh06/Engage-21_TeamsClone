import React, { useState } from 'react';
import './header.css';
import teamsLogo from '../../images/microsoft-teams-1.png';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Header = ({isAuthenticated}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    return (
        <div className="header" >
            <div className="logo" >
                <img link="" src={teamsLogo} alt="teams_logo" />
                <span className="logo-text"> Microsoft <span style={{ color: 'black', fontWeight: '500' }}> Teams Clone </span> </span>
            </div>
            {/* if(isAuthenticated) */}
            <Button component={Link} to="/login" style={{ textTransform: 'none', fontSize: '1rem', fontWeight: '600', paddingTop: '0', paddingBottom: '0'}} size="large" variant="contained" color="secondary">
                Login
            </Button>
        </div>
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