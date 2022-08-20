import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
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

    const router = useRouter();

    return (
        <MainLayout>
            <Button variant="outlined"
                    style={{fontSize: 32}}
                    onClick={() => router.push("/tracks")}>
                To tracks
            </Button>
            <Grid container style={{margin: "20px 0"}}>
                <img src={track.picture} width={200} height={200} style={{borderRadius: "5px 5px"}}
                     alt="track_picture"/>
                <div style={{margin: "20px 0"}}>
                    <h1>Track: {track.name}</h1>
                    <h2>Artist: {track.artist}</h2>
                    <h3>Listens: {track.listens}</h3>
                </div>
            </Grid>
            <h1>Track text</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField label="Your name" fullwidth/>
                <TextField label="Comment" fullwidth multiline rows={4}/>
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map((comment) =>
                    <div>
                        <div>Author - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;
