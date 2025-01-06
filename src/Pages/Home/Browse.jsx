
import React, { useState } from 'react'
import MainComponent from '../../Components/MainComponent/MainComponent'
import { Sidenav, Nav, Toggle, Navbar, HStack, VStack, Image, Button, Table, IconButton } from 'rsuite'
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@rsuite/icons/ArrowRight';
export default function Browse() {
    return (
        <MainComponent>
            <div className='BrowseContainer'>
                <div style={{ padding: "30px" }}>
                    <div className='BrowseH' >
                        <h3>Start browsing</h3>
                    </div> 
                    <div className='BrowseC'>
                        <HStack style={{paddingBottom:"10px"}}>
                            <div className='BrowsePanel'>
                                <HStack>
                                    <h6>Music</h6>
                                    <Image src='https://img.freepik.com/free-vector/music-festival-poster-with-colorful-notes_1017-19492.jpg?t=st=1736163952~exp=1736167552~hmac=7f23d18de465a588b3a1d9bde7fa1e353504fc549b8807a367d9eba3e644c827&w=740' style={{position:'relative',top:"4vh",width:"10vw",height:"20vh",right:'-13vw'}} />
                                </HStack>
                            </div>
                            <div className='BrowsePanel'></div>
                            <div className='BrowsePanel'></div>
                        </HStack>
                        <HStack style={{paddingBottom:"10px"}} >
                            <div className='BrowsePanel'></div>
                            <div className='BrowsePanel'></div>
                            <div className='BrowsePanel'></div>
                        </HStack>
                        <HStack style={{paddingBottom:"10px"}} >
                            <div className='BrowsePanel'></div>
                            <div className='BrowsePanel'></div>
                            <div className='BrowsePanel'></div>
                        </HStack>
                    </div>
                    
                </div>

            </div>

        </MainComponent>
    )
}
