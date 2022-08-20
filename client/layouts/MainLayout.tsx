import React, {FC} from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";
import Head from "next/head";

type MainLayoutProps = {
    title?: string;
    description?: string;
    keywords?: string;
    children?: React.ReactNode
};

const MainLayout: FC<MainLayoutProps> = ({
                                             title,
                                             description = "",
                                             keywords,
                                             children
                                         }) => {
    return (
        <>
            <Head>
                <title>{title || "Music platform"}</title>
                <meta name="description"
                      content={"Music platform - bet place in the world for listen to music! " + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={"Music,tracks," + keywords}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;
