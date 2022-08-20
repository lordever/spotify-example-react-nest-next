import React, {FC} from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";

type Props = {
    children?: React.ReactNode
};

const MainLayout: FC<Props> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;
