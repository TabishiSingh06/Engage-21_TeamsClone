import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import InfoBar from './InfoBar';
import Input from './Input';
import TextContainer from './TextContainer';
import Messages from './MessagesComponents/Messages';


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
        const { name, room } = queryString.parse(location.search);
        console.log(location);

        socket = io(ENDPOINT);
        console.log(room);
        console.log(name);

        setRoom(room);
        setName1(name);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
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
                <InfoBar room={room} />
                <Messages messages={messages} name={name1} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;