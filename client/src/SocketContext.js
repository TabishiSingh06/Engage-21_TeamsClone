import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
const SocketContext = createContext();
const socket = io('http://localhost:5000');

const ContextProvider = ({ children }) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [me, setMe] = useState('');
    //reference out video
    const myVideo = useRef();
    //reference to other user video
    const userVideo = useRef(null);
    //reference to help us disconnect from the video call
    const connectionRef = useRef();

    useEffect(() => {
        const userMedia = async () => {
            try {
                //allow for video stream or not
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                console.log(stream);
                setStream(stream);
                myVideo.current.srcObject = stream;
            } catch (error) {
                console.log(error);
            }
        }
        userMedia();
        socket.on('me', (id) => setMe(id));
        socket.on('callUser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivingCall: true, from, name: callerName, signal });
        });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);
        //create a new peer for call accepted
        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, to: call.from });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);
        connectionRef.current = peer;
    };

    const declineCall = () => {
        //METHOD TO DECLINE THE CALL AND CLEAR THE CONNECTION
        setCallAccepted(false);
        connectionRef.current.destroy();
        window.location.reload();
    };

    const callUser = (id) => {
        //create a new peer 
        const peer = new Peer({ initiator: true, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callAccepted', (signal) => {
            setCallAccepted(true);

            peer.signal(signal);
        });
        connectionRef.current = peer;
    };

    const leaveCall = () => {
        //METHOD TO LEAVE THE CALL
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    };

    return (
        <SocketContext.Provider value={{
            call,
            callAccepted,
            myVideo,
            userVideo,
            stream,
            name,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall,
            declineCall,
        }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };