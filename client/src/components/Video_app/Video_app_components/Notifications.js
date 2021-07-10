import React, { useContext } from 'react';
import { SocketContext } from '../../../SocketContext';
import { Button } from '@material-ui/core';


const Notifications = () => {
    const { answerCall, call, callAccepted, declineCall } = useContext(SocketContext);
    return (
        <div>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>{call.name} is calling:</h3>
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
