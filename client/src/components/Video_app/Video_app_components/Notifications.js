import React, { useContext } from 'react';
import { SocketContext } from '../../../SocketContext';
import { Button } from '@material-ui/core';


const Notifications = () => {
    const { answerCall, call, callAccepted, declineCall } = useContext(SocketContext);
    return (
        <div>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h6>{call.name} is calling:</h6>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                    <Button variant="contained" color="primary" onClick={declineCall}>
                        Decline
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Notifications
