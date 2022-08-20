import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            "id": 2,
            "artist": "Metallica ",
            "name": "St. Anger",
            "text": "Saint angeeeeer",
            "picture": "http://localhost:5000/image/bde4ba24-4131-48f6-b1e5-913051960641.jpg",
            "audio": "http://localhost:5000/audio/bc2019a1-38ee-405d-a41f-304b0dd6055c.mp3",
            "listens": 0,
            "comments": []
        },
        {
            "id": 1,
            "artist": "Slipknot",
            "name": "Duality",
            "text": "TEXT",
            "picture": "http://localhost:5000/image/06a90030-3b4c-42cc-b5bf-f11b12e5b553.jpg",
            "audio": "http://localhost:5000/audio/267c072e-ffcf-417e-b75b-c48645ec971f.mp3",
            "listens": 0,
            "comments": []
        },
        {
            "id": 3,
            "artist": "Stone sour",
            "name": "Made of scars",
            "text": "Made",
            "picture": "http://localhost:5000/image/a2e78159-2181-49eb-95d1-6b0b210ac07e.jpg",
            "audio": "http://localhost:5000/audio/606d6e47-8132-4cb0-80b4-add95035257c.mp3",
            "listens": 0,
            "comments": []
        },
        {
            "id": 3,
            "artist": "Stone sour",
            "name": "Made of scars",
            "text": "Made",
            "picture": "http://localhost:5000/image/a2e78159-2181-49eb-95d1-6b0b210ac07e.jpg",
            "audio": "http://localhost:5000/audio/606d6e47-8132-4cb0-80b4-add95035257c.mp3",
            "listens": 0,
            "comments": []
        }
    ]
    return (
        <>
            <MainLayout>
                <Grid container justifyContent="center">
                    <Card style={{width: "900px"}}>
                        <Box p={3}>
                            <Grid container justifyContent="space-between">
                                <h1>Tracks</h1>
                                <Button onClick={() => router.push("/tracks/create")}>
                                    Upload
                                </Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks}/>
                    </Card>
                </Grid>
            </MainLayout>
        </>
    );
};

export default Index;
