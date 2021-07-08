import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import './Join.css';

function JoinRoom() {
    const [name1, setName1] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div>
                <h4 className="heading">Join Chat</h4>
            </div>
            <div className="joinInnerContainer">
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName1(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>

            </div>
            <div>
                <Link onClick={e => (!name1) ? e.preventDefault() : null} to={`/chat?name1=${name1}&room=${room}`}>
                    <button className={'button mt-20'} type="submit">Chat now!</button>
                </Link>
            </div>
        </div>
    );
}

export default JoinRoom;