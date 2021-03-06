import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../../../SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '450px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        margin: '0px',
    },
}));

function VideoPlayer() {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();


    return (
        <Grid container className={classes.gridContainer}>
            {/*My Own Video*/}
            {stream && (
                <Paper elevation={2} className={classes.paper}>
                    <Typography gutterBottom variant="h8" >{name || ''}</Typography>
                    <Grid item xs={12} md={6}>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )
        }
            {/*User Video*/}
            {callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h8" gutterBottom>{call.name || 'Name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
        }
        </Grid>
    )
}

export default VideoPlayer
