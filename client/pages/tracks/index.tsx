import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {wrapper} from "../../store";
import {fetchTracks, searchTracks} from "../../store/action-creators/track";
import {useDispatch} from "react-redux";

const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector(state => state.track);
    const [query, setQuery] = useState<string>("");
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(null);

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (timer) {
            clearTimeout(timer);
        }

        setTimer(setTimeout(async () => {
            await searchTracks(dispatch, query);
        }, 1000));
    }

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <>
            <MainLayout title="Music platform | Tracks">
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
                        <TextField fullWidth
                                   value={query}
                                   onChange={search}/>
                        <TrackList tracks={tracks}/>
                    </Card>
                </Grid>
            </MainLayout>
        </>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    await fetchTracks(store.dispatch);
});

