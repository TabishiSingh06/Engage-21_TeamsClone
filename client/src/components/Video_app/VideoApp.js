import React, { useEffect } from 'react'
import './VideoApp.css';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './Video_app_components/VideoPlayer';
import Options from './Video_app_components/Options';
import Notifications from './Video_app_components/Notifications';
import Header from '../header/header';
import MeetButtons from './Video_app_components/MeetButtons';
import JoinRoom from '../Chat/JoinRoom';
import Chat from '../Chat/Chat'

const useStyles = makeStyles((theme) => ({

    wrapperOut: {
        display: 'flex',
        paddingTop: '10px',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#ffffff',
    },
    wrapper_one: {
        display: 'flex',
        flex: '2',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    wrapper_two: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
}));

function VideoApp({ location, user }) {
    const classes = useStyles();
    useEffect(( location ) => {
        console.log(location)
    }, [location.search]);

    return (
        <div>
            <Header />
            <div className={classes.wrapperOut}>
                <div className={classes.wrapper_one}>
                    <VideoPlayer />
                    <MeetButtons />
                    <Options>
                        <Notifications />
                    </Options>
                    <JoinRoom />
                </div>
                <div className={classes.wrapper_two}>
                    {location.search != null ? <Chat location={location} /> : null}
                </div>
            </div>

        </div>
    )

}

export default VideoApp;
