import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//PRIVATE ROUTE FOR THE VIDEOAPP PAGE
let token = localStorage.getItem('token');
    let profile = localStorage.getItem('profile');
const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    
    <Route    
        {...rest}        
        render={props =>
            !token && !profile ? (
                <Redirect to='/login' />
            ) : (
                <Component {...props} />
            )
        }
    />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)