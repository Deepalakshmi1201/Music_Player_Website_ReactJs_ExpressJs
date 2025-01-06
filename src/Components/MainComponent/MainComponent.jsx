import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Nav, Toggle, Navbar, HStack, VStack } from 'rsuite';
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
import SideNav from '../DashComponent/SideNav';

export default function MainComponent({ children }) {
    const navigate = useNavigate()
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');;
    return (
        <div className='maincompContainer'>
            <div>
                <div className='mainComH'>
                    <Navbar>
                        <Navbar.Brand href="#"  >RSUITE</Navbar.Brand>
                        <Nav style={{ marginLeft: "25vw" }} >
                            <Nav.Item>
                                <HStack style={{ columnGap: 20 }}>
                                    <IconButton circle icon={<IoHome size={20} />} appearance="primary" onClick={() => navigate('/home')} />
                                    <InputGroup inside style={{ borderRadius: 50, width: "28vw", padding: 3 }}  >
                                        <InputGroup.Button>
                                            <SearchIcon />
                                        </InputGroup.Button>
                                        <Input placeholder='What do you want to play ?' />
                                        <InputGroup.Button>
                                            <AppSelectIcon onClick={() => navigate('/browse')} />
                                        </InputGroup.Button>
                                    </InputGroup>
                                </HStack>
                            </Nav.Item>

                        </Nav>
                        <Nav pullRight>
                            <Nav.Item >
                                <IconButton circle icon={<NoticeIcon size={20} />} appearance="link" />
                                <IconButton circle icon={<IoPersonSharp size={20} />} appearance="primary" />
                            </Nav.Item>
                        </Nav>
                    </Navbar>

                </div>
                <div className='mainComC'>
                    <HStack style={{ justifyContent: "left", alignItems: 'flex-start' }}>
                        <div className='sideNav'>
                            <SideNav />
                        </div>
                        <div>{children}</div>
                    </HStack>

                </div>
            </div>

            <div className='mainComF'>

            </div>
        </div>

    )
}
