import React, {useState} from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {wrapper} from "../../store";
import {fetchTracks} from "../../store/action-creators/track";
import axios from "axios";
import {useInput} from "../../hooks/useInput";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = useInput("");
    const comment = useInput("");

    const addComment = async () => {
        try {
            const response = await axios.post("http://localhost:5000/tracks/comment", {
                username: username.value,
                text: comment.value,
                trackId: track.id,
            });

            setTrack({...track, comments: [...track.comments, response.data]});
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <MainLayout>
            <Button variant="outlined"
                    style={{fontSize: 32}}
                    onClick={() => router.push("/tracks")}>
                To tracks
            </Button>
            <Grid container style={{margin: "20px 0"}}>
                <img src={"http://localhost:5000/" + track.picture} width={200} height={200}
                     style={{borderRadius: "5px 5px"}}
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
                <TextField label="Your name" fullWidth {...username}/>
                <TextField label="Comment" fullWidth multiline rows={4} {...comment}/>
                <Button onClick={addComment}>Send</Button>
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

export async function getServerSideProps({params}) {
    const response = await axios.get("http://localhost:5000/tracks/" + params.id);

    return {
        props: {
            serverTrack: response.data
        }
    }
}
