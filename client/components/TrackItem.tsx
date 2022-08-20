import React, {FC} from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {

    const router = useRouter();

    return (
        <Card className={styles.track} onClick={() => router.push("/tracks/" + track.id)}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {!active ? <PlayArrow/> : <Pause/>}
            </IconButton>
            <img width={70} height={70} style={{borderRadius: "5px 5px"}} src={track.picture}/>
            <Grid container direction="column" style={{width: "200px", margin: "0 20px"}}>
                <div>{track.name}</div>
                <div style={{fontSize: "12px", color: "gray"}}>{track.artist}</div>
            </Grid>
            {active && <div style={{marginLeft: "auto"}}>02: 42 / 03: 22</div>}
            <IconButton style={{marginLeft: "auto"}} onClick={(e) => e.stopPropagation()}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;
