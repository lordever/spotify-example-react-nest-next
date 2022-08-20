import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
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
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label="Author"
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label="Text"
                            multiline
                            rows={3}
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
