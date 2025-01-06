import React, { useState } from 'react'
import MainComponent from '../../Components/MainComponent/MainComponent'
import { Sidenav, Nav, Toggle, Navbar, HStack, VStack, Image, Button, Table, IconButton } from 'rsuite'
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@rsuite/icons/ArrowRight';

export default function MusicFolders() {
    const navigate = useNavigate();
    const { Column, HeaderCell, Cell } = Table;
    const [action, setaction] = useState(false);

    const tamilSongs = [
        {
            title: "Rowdy Baby",
            album: "Maari 2",
            duration: "4:38",
            releaseDate: "2018-12-25"
        },
        {
            title: "Vaathi Coming",
            album: "Master",
            duration: "3:49",
            releaseDate: "2020-11-10"
        },
        {
            title: "Tum Tum",
            album: "Enemy",
            duration: "3:45",
            releaseDate: "2021-10-26"
        },
        {
            title: "Enjoy Enjaami",
            album: "Independent Single",
            duration: "4:40",
            releaseDate: "2021-03-07"
        },
        {
            title: "Arabic Kuthu",
            album: "Beast",
            duration: "4:42",
            releaseDate: "2022-02-14"
        },
        {
            title: "Vaaathi Raid",
            album: "Master",
            duration: "4:22",
            releaseDate: "2020-12-15"
        },
        {
            title: "Pathala Pathala",
            album: "Vikram",
            duration: "4:01",
            releaseDate: "2022-05-11"
        },
        {
            title: "Yennadi Mayilu",
            album: "Pugazh",
            duration: "3:56",
            releaseDate: "2016-03-18"
        },
        {
            title: "Kutty Pattas",
            album: "Independent Single",
            duration: "3:46",
            releaseDate: "2021-02-14"
        },
        {
            title: "Thani Oruvan Theme",
            album: "Thani Oruvan",
            duration: "2:48",
            releaseDate: "2015-08-28"
        }
    ];

    console.log(tamilSongs);

    return (
        <MainComponent>
            <div className='homeContainer'>
                <div style={{ flex: 1 }}>
                    <div className='musicFolderH' >


                        <HStack style={{ padding: "10px" }}>
                            <Image
                                src="https://img.freepik.com/free-vector/abstract-music-background-with-green-neon-lights_1017-19759.jpg?t=st=1736154050~exp=1736157650~hmac=2815596bce2e0dfe3c2b41941c2853cf2fd2cc30324227374872cdafc36c2d74&w=740"
                                className="musicFolderImg"
                            />
                            <VStack style={{ rowGap: 1 }}>
                                <p>Playlist</p>
                                <p style={{ fontSize: 50 }}>Music Songs</p>
                                <p>Dhiya . 10 Songs</p>
                            </VStack>

                        </HStack>




                    </div>
                    <div className="musicFolderC">
                        <div style={{ flex: 1 }}>
                            <Table height={315} data={tamilSongs}>
                                <Column width={300} resizable>
                                    <HeaderCell>Song</HeaderCell>
                                    <Cell dataKey="title" onClick={() => setaction(true)} />
                                </Column>
                                <Column width={300} resizable>
                                    <HeaderCell>Album Name</HeaderCell>
                                    <Cell dataKey="album" />
                                </Column>
                                <Column width={200} resizable>
                                    <HeaderCell>Date added</HeaderCell>
                                    <Cell dataKey="releaseDate" />
                                </Column>
                                <Column width={200} resizable>
                                    <HeaderCell>Duration</HeaderCell>
                                    <Cell dataKey="duration" />
                                </Column>
                            </Table>
                        </div>


                    </div>
                </div>
                {action && (
                    <div style={{
                        flex: 0.3,
                        display: "flex",
                        flexDirection: "column", 
                        overflow: "hidden",
                        // padding:10
                    }}>
                        {/* <VStack> */}
                            <Image
                                src="https://img.freepik.com/free-vector/abstract-music-background-with-green-neon-lights_1017-19759.jpg?t=st=1736154050~exp=1736157650~hmac=2815596bce2e0dfe3c2b41941c2853cf2fd2cc30324227374872cdafc36c2d74&w=740"
                                className="musicfullImg"
                            />
                            <p>song name</p>
                            <div className='credits' >
                                <h6>Credits</h6>
                            </div>
                        {/* </VStack> */}
                    </div>
                )}



            </div>

        </MainComponent>
    )
}
