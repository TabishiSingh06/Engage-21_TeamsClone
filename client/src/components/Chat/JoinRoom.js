import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './JoinRoom.css';

const useStyles = makeStyles(() => ({
    paper: {
        paddingRight: '10px',
        margin: '10px',
        width: '470px',
        padding: '10px',
    },
}));

function JoinRoom() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const classes = useStyles();

    return (
        <Paper elevation={2} className={classes.paper}>
            <div className="joinOuterContainer">
                <div>
                    <h6 className="heading">Join Chat</h6>
                </div>
                <div className="joinInnerContainer">
                    <div>
                        <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
                    </div>

                </div>
                <div>
                    <Link onClick={e => (!name || !room ) ? e.preventDefault() : null} to={`/videoapp?name=${name}&room=${room}`}>
                        <button className="button" type="submit">Chat now!</button>
                    </Link>
                </div>
            </div>
        </Paper>
    );
}

export default JoinRoom;