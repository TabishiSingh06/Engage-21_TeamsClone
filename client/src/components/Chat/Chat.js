import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import InfoBar from './InfoBar';
import InputChat from './InputChat';
// import TextContainer from '../TextContainer/TextContainer';
// import Messages from '../Messages/Messages';


import './Chat.css';

const ENDPOINT = 'http://localhost:5000';

let socket;

const Chat = ({ location }) => {
    const [name1, setName1] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name1, room } = queryString.parse;

        socket = io(ENDPOINT);

        setRoom(room);
        setName1(name1)

        socket.emit('join', { name1, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
        console.log(message, messages);
    }

    return (
        <div className="outerContainer">
            <div className="container1">
                {/* <input
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                /> */}
                <InfoBar room={room}/>
                <InputChat message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

export default Chat;