import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Nav, Toggle, Navbar, HStack, VStack, Image } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { IconButton } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { IoHome } from "react-icons/io5";
import { Input, InputGroup, Whisper, Tooltip } from 'rsuite';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import { FaRegUserCircle } from 'react-icons/fa';
import AppSelectIcon from '@rsuite/icons/AppSelect';
import NoticeIcon from '@rsuite/icons/Notice'
import { IoPersonSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { Panel, Placeholder } from 'rsuite';

export default function SideNav() {
    const navigate = useNavigate();
    return (
        <Sidenav style={{ width: "19vw" }}>
            <Sidenav.Body>
                <Nav >
                    <HStack style={{ justifyContent: 'space-between', padding: 10 }}>
                        <HStack style={{ alignItems: 'center', columnGap: 10 }} >
                            <LuLibrary size={20} />
                            <p style={{ fontSize: 16 }}>Your Library</p>

                        </HStack>
                        <MdAdd size={20} />
                    </HStack>
                    <VStack style={{ height: "70vh", overflowY: "auto", overflowX: "hidden" }}  >
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div className="panel" key={index} >
                                <HStack onClick={() => navigate('/musicFolder')}>
                                    <Image
                                        src="https://img.freepik.com/free-vector/abstract-music-background-with-green-neon-lights_1017-19759.jpg?t=st=1736154050~exp=1736157650~hmac=2815596bce2e0dfe3c2b41941c2853cf2fd2cc30324227374872cdafc36c2d74&w=740"
                                        className="image"
                                    />
                                    <p>Dhee</p>
                                </HStack>
                            </div>
                        ))}
                    </VStack>


                </Nav>
            </Sidenav.Body>
        </Sidenav>
    )
}
