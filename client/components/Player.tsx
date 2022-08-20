import React, {FC} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from "../styles/Player.module.scss";
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";

interface PlayerProps {

}

const Player: FC<PlayerProps> = () => {
    const track: ITrack = {
        "id": 1,
        "artist": "Slipknot",
        "name": "Duality",
        "text": "TEXT",
        "picture": "http://localhost:5000/image/06a90030-3b4c-42cc-b5bf-f11b12e5b553.jpg",
        "audio": "http://localhost:5000/audio/267c072e-ffcf-417e-b75b-c48645ec971f.mp3",
        "listens": 0,
        "comments": []
    };

    const active = false;
    return (
        <div className={styles.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {!active ? <PlayArrow/> : <Pause/>}
            </IconButton>
            <Grid container direction="column" style={{width: "200px", margin: "0 20px"}}>
                <div>{track.name}</div>
                <div style={{fontSize: "12px", color: "gray"}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {
            }}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={0} right={100} onChange={() => {
            }}/>
        </div>
    );
};

export default Player;
