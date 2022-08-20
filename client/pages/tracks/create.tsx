import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "../../components/FileUpload";
import {useInput} from "../../hooks/useInput";
import {useRouter} from "next/router";
import axios from "axios";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput("");
    const artist = useInput("");
    const text = useInput("");

    const router = useRouter();

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        } else {
            const formData = new FormData();
            formData.append("name", name.value);
            formData.append("artist", artist.value);
            formData.append("text", text.value);
            formData.append("picture", picture);
            formData.append("audio", audio);

            axios.post("http://localhost:5000/tracks", formData).then(() => {
                router.push("/tracks");
            }).catch(console.error);
        }
    }
    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label="Track name"
                            {...name}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label="Author"
                            {...artist}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label="Text"
                            multiline
                            rows={3}
                            {...text}
                        />
                    </Grid>
                }

                {activeStep === 1 &&
                    <FileUpload accept="image/*"
                                setFile={setPicture}>
                        <Button>Upload picture</Button>
                    </FileUpload>
                }

                {activeStep === 2 &&
                    <FileUpload accept="audio/*"
                                setFile={setAudio}>
                        <Button>Upload audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid justifyContent={"space-between"}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
