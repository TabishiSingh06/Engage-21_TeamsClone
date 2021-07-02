import React from 'react'
import './VideoApp.css';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './Video_app_components/VideoPlayer';
import Options from './Video_app_components/Options';
import Notifications from './Video_app_components/Notifications';
import Header from '../header/header';
import MeetButtons from './Video_app_components/MeetButtons';
import Share from './Video_app_components/ShareButtons';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 2,
        fontSize: "2rem",
        margin: '0px 20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200vh',
        height: '5rem',
        border: '5px solid #3f51b5',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
}));

function VideoApp() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Header />
            <VideoPlayer />
            <MeetButtons />
            <Options>
                <Notifications />
            </Options>
            <Share />

        </div>
    )
}

export default VideoApp;
