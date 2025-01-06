import React from 'react'
import MainComponent from '../../Components/MainComponent/MainComponent'
import { Sidenav, Nav, Toggle, Navbar, HStack, VStack, Image, Button } from 'rsuite'

export default function Home() {
    return (
        <MainComponent>
            <div className='homeContainer'>
                <div className='homeH' >
                    <HStack>
                        <Button>
                            All
                        </Button>
                        <Button>
                            Music
                        </Button>
                    </HStack>
                    <HStack style={{ height: "20vh", }}>
                        {Array.from({ length: 2}).map((_, index) => (
                            <div className="panel1" key={index} >
                                <HStack>
                                    <Image
                                        src="https://img.freepik.com/free-vector/abstract-music-background-with-green-neon-lights_1017-19759.jpg?t=st=1736154050~exp=1736157650~hmac=2815596bce2e0dfe3c2b41941c2853cf2fd2cc30324227374872cdafc36c2d74&w=740"
                                        className="image"
                                    />
                                    <p>Dhee</p>
                                </HStack>
                            </div>
                        ))}
                    </HStack>


                </div>
                <div className='homeC'></div>
            </div>

        </MainComponent>
    )
}
