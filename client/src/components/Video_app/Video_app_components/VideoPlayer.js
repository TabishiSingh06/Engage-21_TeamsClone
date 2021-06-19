import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../../../SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '400px',
        height: '200px',
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
        border: '1px solid black',
        margin: '30px',
    },
}));

function VideoPlayer() {
    const { name, callAccepted, myVideo, userVideo, callEnded } = useContext(SocketContext);
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer}>
            {/*My Own Video*/}
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography varient="h5" gutterBottom>Name</Typography>
                    <video playsInline muted ref={null} autoPlay className={classes.video} />
                </Grid>
            </Paper>
            {/*User Video*/}

            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography varient="h5" gutterBottom>Name</Typography>
                    <video playsInline ref={null} autoPlay className={classes.video} />
                </Grid>
            </Paper>

        </Grid>
    )
}

export default VideoPlayer
