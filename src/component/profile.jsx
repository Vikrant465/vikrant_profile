import { Card, CardBody, Button, Image } from "@heroui/react";
import React from "react";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCirlcles from '../component/background'


export default function profile() {
    const [text, count] = useTypewriter({
        words: [
            "Vikrant Singh",
            "a Full Stack Developer",
            "Member of Codeshef NSUT",
            "a passionate learner",
            "a Tech Enthusiast",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div>
            <div className='h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden'>
                {/* <BackgroundCirlcles /> */}
                <Image
                    src="/images/profile2.jpeg"
                    alt="Profile Picture"
                    width={280}
                    height={350}
                    className="rounded-full shadow-lg"
                />
                <div className=''>
                    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
                    <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                        <span>Hi, I'm {text}</span><Cursor cursorColor='#F7AB0A'/>
                    </h1>
                </div>
            </div>
            {/* <Card>
                <CardBody>
                    <div className='flex items-center justify-center w-full h-screen'>
                        <div className="flex flex-col w-1/2 items-center justify-center ">
                            <h2 className="text-4xl font-bold text-center">
                                Vikrant Singh
                            </h2>
                            <p>
                                I am a Full stack developer.
                            </p>
                        </div>
                        <div className="flex flex-col w-1/2 m-4 items-center justify-center">
                            <div className="flex items-center justify-center">
                                <Button
                                    color="primary"
                                    variant="solid"    
                                >
                                    <Image
                                    src="/images/email.png"
                                    alt="email"
                                    width={20}
                                    height={20}
                                    className="rounded-lg shadow-lg cursor-pointer"
                                    />
                                    Email
                                </Button>
                            </div>

                        </div>
                    </div>
                </CardBody>
            </Card> */}

        </div>
    );
}