import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../../../SocketContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '470px',
        margin: '10px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 10,
    },
    padding: {
        padding: 2,
    },
    paper: {
        background: '#fff',
        borderRadius: '5px',
        padding: '10px 10px',
    },
}));

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();

    const onClickIdToCall = (e) => {
        setIdToCall(e.target.value);
    }

    return (
        <Container className={classes.container}>
            <Paper elevation={2} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off" >
                    <div className="joinOuterContainer">
                        <div>
                            <h6 className="heading">Join Video Chat</h6>
                        </div>
                        <div className="joinInnerContainer">
                            <div>
                                <input value={name} placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                            </div>
                            <div>
                                <input value={idToCall} placeholder="ID to Call" className="joinInput" type="text" onChange={onClickIdToCall} />
                            </div>
                        </div>
                        <div className="joinInnerContainer">
                            <div>
                                <CopyToClipboard text={me}>
                                    <Button styles={{ borderRadius: '20px' }} halfWidth variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                        Copy your ID
                                    </Button>
                                </CopyToClipboard>
                            </div>
                            <div>
                                {callAccepted && !callEnded ? (
                                    <Link >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<PhoneDisabled fontSize="large" />}
                                            halfWidth
                                            onClick={leaveCall}
                                        >
                                            Hang Up
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<Phone fontSize="large" />}
                                            fullWidth
                                            onClick={() => callUser(idToCall)}
                                        >
                                            Call
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
                {children}
            </Paper>
        </Container >
    )
}

export default Options
