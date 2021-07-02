import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import { SocketContext } from '../../../SocketContext';

const buttons = {
    padding: "1rem",
}

const MeetButtons = () => {
    const { stream } = useContext(SocketContext);
    const muteMic = () => {
        stream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
    }

    const muteCam = () => {
        stream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
    }

    return (
        <div className={buttons}>
            <IconButton onClick={muteMic} height="2rem" aria-label="delete" color="primary">
                <MicIcon />
            </IconButton>
            <IconButton onClick={muteCam} height="2rem" aria-label="delete" color="primary">
                <VideocamIcon />
            </IconButton>

        </div>
    )
}

export default MeetButtons