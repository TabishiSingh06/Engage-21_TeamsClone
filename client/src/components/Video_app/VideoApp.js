import React from 'react'
import { Typography, AppBar } from '@material-ui/core';
import './VideoApp.css';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './Video_app_components/VideoPlayer';
import Options from './Video_app_components/Options';
import Notifications from './Video_app_components/Notifications';
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 2,
        margin: '20px 10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vh',
        border: '5px solid #3f51b5',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

function VideoApp() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="primary" >
                <Typography variant="h4" align="center"> Video Chat Page! </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default VideoApp;
