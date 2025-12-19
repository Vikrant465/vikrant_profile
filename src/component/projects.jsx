// import React from "react";
// import { Tabs, Tab, Card, CardBody, Switch, Image } from "@heroui/react";

// export default function Projects() {


//     return (
//         <div>
//             <div className="flex justify-center text-4xl ">MY PROJECTS</div>

//             <div className='flex flex-col items-center w-full justify-center h-screen'>
//                 <div className="flex  flex-col justify-center items-center w-full h-full p-6 ">
//                     <Tabs aria-label="Options"  >
//                         <Tab key="photos" title="Project 1">
//                             <Card>
//                                 <CardBody>
//                                     <div>
//                                         <div className="flex items-center justify-center mb-5">
//                                             <h1 className="text-3xl font-bold text-center ">
//                                                 Text-based Emotion Prediction ChatBot using ML Model
//                                             </h1>
//                                         </div>
//                                         <div className="flex flex-row w-full h-full ">
//                                             <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4">
//                                                 <p className=" text-gray-600">
//                                                     This project is a text-based emotion prediction chatbot that uses a machine learning model to analyze user input and predict emotions. It can be used for various applications, such as mental health support, customer service, and more.</p>
//                                                 <p className="text-center text-gray-600">
//                                                     • Technologies Used:  Next.js, ML Model, FastApi, GenAI, MongoDB
//                                                 </p>
//                                                 <p className="text-center text-gray-600">
//                                                     <a href="https://github.com/Vikrant465/Optimizing-Emotion-Recognition-in-Web-Chatbots" className="text-sky-600 hover:underline">• View on GitHub</a>
//                                                 </p>
//                                                 <p className="text-center text-sky-600">
//                                                     <a href="https://btp-emotion1.vercel.app/" className="  hover:underline">• Visit the project</a>
//                                                 </p>
//                                             </div>
//                                             <div className="flex items-center justify-center w-1/2 p-6">
//                                                 <Image
//                                                     src="/images/project1.png"
//                                                     alt="Project 1 Screenshot"
//                                                     width={650}
//                                                     height={200}
//                                                     className="rounded-lg shadow-lg cursor-pointer"
//                                                     onClick={() => window.open("https://btp-emotion1.vercel.app/")}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </CardBody>
//                             </Card>
//                         </Tab>
//                         <Tab key="music" title="Project 2">
//                             <Card>
//                                 <CardBody>
//                                     <div>
//                                         <div className="flex items-center justify-center mb-1">
//                                             <h1 className="text-2xl font-bold text-center">
//                                                 Remote Control Remotely accessable car
//                                             </h1>
//                                         </div>
//                                         <div className="flex flex-row w-full h-full mt-2">
//                                             <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4 p-6">
//                                                 <p className="text-center text-gray-600">
//                                                     This project is a remote control car that can be accessed and controlled remotely. It uses a combination of hardware and software to allow users to drive the car from anywhere with an internet connection.
//                                                 </p>
//                                                 <p className="text-center text-gray-600">
//                                                     • Technologies Used: HTML , Arduino IDE , Express , AWS-EC2 , ESP-32CAM
//                                                 </p>
//                                                 <p className="text-center text-gray-600">
//                                                     <a href="https://github.com/Vikrant465/remote-control-car" className="text-sky-600 hover:underline">• View on GitHub</a>
//                                                 </p>

//                                             </div>
//                                             <div className="flex items-center justify-center w-1/2 h-full p-6">
//                                                 <Image
//                                                     src="/images/project2.png"
//                                                     alt="Project 1 Screenshot"
//                                                     width={500}
//                                                     height={300}
//                                                     className="rounded-lg shadow-lg cursor-pointer"
//                                                 // onClick={() => window.open("https://btp-emotion1.vercel.app/")}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </CardBody>
//                             </Card>
//                         </Tab>
//                         <Tab key="videos" title="Project 3">
//                             <Card>
//                                 <CardBody>
//                                     <div>
//                                         <div className="flex items-center justify-center mb-1">
//                                             <h1 className="text-2xl font-bold text-center">
//                                                 Quiz App
//                                             </h1>
//                                         </div>
//                                         <div className="flex flex-row w-full h-full mt-2">
//                                             <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4 p-6">
//                                                 <p className="text-center text-gray-600">
//                                                     Made a fully functional KBC quiz game which include timer,sound effect and animations to have a good gaming expreience.
//                                                 </p>
//                                                 <p className="text-center text-gray-600">
//                                                     • Technologies Used: React.js, JavaScript, Tailwind CSS
//                                                 </p>
//                                                 <p className="text-center text-gray-600">
//                                                     <a href="https://github.com/Vikrant465/quiz-aap-using-react" className="text-sky-600 hover:underline">• View on GitHub</a>
//                                                 </p>
//                                                 <p className="text-center text-sky-600">
//                                                     <a href="https://quiz-aap-using-react.vercel.app/" className="  hover:underline">• Visit the project</a>
//                                                 </p>
//                                             </div>
//                                             <div className="flex items-center justify-center w-1/2 h-full p-6">
//                                                 <Image
//                                                     src="/images/project3.png"
//                                                     alt="Project 1 Screenshot"
//                                                     width={500}
//                                                     height={300}
//                                                     className="rounded-lg shadow-lg cursor-pointer"
//                                                     onClick={() => window.open("https://quiz-aap-using-react.vercel.app/")}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </CardBody>
//                             </Card>
//                         </Tab>
//                     </Tabs>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody, Image } from "@heroui/react";

export default function Projects() {
    const [selectedTab, setSelectedTab] = useState("photos");

    return (
        <section id="Project">
            <div className="flex flex-col items-center w-full h-screen">
                <div className="flex justify-center text-4xl ">MY PROJECTS</div>

                <div className="flex flex-col items-center w-full justify-center h-screen">
                    <div className="flex flex-col justify-center items-center w-full h-full p-6">
                        <Tabs
                            selectedKey={selectedTab}
                            onSelectionChange={key => setSelectedTab(String(key))}
                            aria-label="Options"
                            classNames={{ tabList: "flex" }}
                        >
                            <Tab
                                key="photos"
                                title={
                                    <div
                                        onMouseEnter={() => setSelectedTab("photos")}
                                        className="cursor-pointer text-xl"
                                    >
                                        Project 1
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody>
                                        <div>
                                            <div className="flex items-center justify-center mb-5">
                                                <h1 className="text-3xl font-bold text-center">
                                                    Text-based Emotion Prediction ChatBot using ML Model
                                                </h1>
                                            </div>
                                            <div className="flex flex-row w-full h-full">
                                                <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4">
                                                    <p className="text-gray-600">
                                                        This project is a text-based emotion prediction chatbot that uses a machine learning model to analyze user input and predict emotions. It can be used for various applications, such as mental health support, customer service, and more.
                                                    </p>
                                                    <p className="text-center text-gray-600 ">
                                                        • Technologies Used: Next.js, ML Model, FastApi, GenAI, MongoDB
                                                    </p>
                                                    <p className="text-center text-gray-600 ">
                                                        <a href="https://github.com/Vikrant465/Optimizing-Emotion-Recognition-in-Web-Chatbots" className="text-sky-600 hover:underline">• View on GitHub</a>
                                                    </p>
                                                    <p className="text-center text-sky-600 ">
                                                        <a href="https://btp-emotion1.vercel.app/" className="hover:underline">• Visit the project</a>
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center w-1/2 p-6">
                                                    <Image
                                                        src="/images/project1.png"
                                                        alt="Project 1 Screenshot"
                                                        width={650}
                                                        height={300}
                                                        className="rounded-lg shadow-lg cursor-pointer"
                                                        onClick={() => window.open("https://btp-emotion1.vercel.app/")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>

                            <Tab
                                key="music"
                                title={
                                    <div
                                        onMouseEnter={() => setSelectedTab("music")}
                                        className="cursor-pointer  text-xl"
                                    >
                                        Project 2
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody>
                                        <div>
                                            <div className="flex items-center justify-center mb-5">
                                                <h1 className="text-3xl font-bold text-center">
                                                    Remote Control Remotely Accessible Car
                                                </h1>
                                            </div>
                                            <div className="flex flex-row w-full h-full ">
                                                <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4">
                                                    <p className="text-gray-600">
                                                        This project is a remote control car that can be accessed and controlled remotely. It uses a combination of hardware and software to allow users to drive the car from anywhere with an internet connection.
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        • Technologies Used: HTML, Arduino IDE, Express, AWS-EC2, ESP-32CAM
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        <a href="https://github.com/Vikrant465/remote-control-car" className="text-sky-600 hover:underline">• View on GitHub</a>
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center w-1/2 h-full p-6">
                                                    <Image
                                                        src="/images/project2.png"
                                                        alt="Project 2 Screenshot"
                                                        width={650}
                                                        height={300}
                                                        className="rounded-lg shadow-lg cursor-pointer"
                                                        onClick={() => alert("This project involves hardware components and cannot be demonstrated online.")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>

                            <Tab
                                key="videos"
                                title={
                                    <div
                                        onMouseEnter={() => setSelectedTab("videos")}
                                        className="cursor-pointer  text-xl"
                                    >
                                        Project 3
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody>
                                        <div>
                                            <div className="flex items-center justify-center mb-5">
                                                <h1 className="text-3xl font-bold text-center">
                                                    Quiz App
                                                </h1>
                                            </div>
                                            <div className="flex flex-row w-full h-full">
                                                <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4">
                                                    <p className="text-gray-600 ">
                                                        Made a fully functional KBC quiz game which includes timer, sound effects, and animations to provide a rich gaming experience.
                                                    </p>
                                                    <p className="text-center text-gray-600 ">
                                                        • Technologies Used: React.js, JavaScript, Tailwind CSS
                                                    </p>
                                                    <p className="text-center text-gray-600 ">
                                                        <a href="https://github.com/Vikrant465/image-resizer-app" className="text-sky-600 hover:underline">• View on GitHub</a>
                                                    </p>
                                                    <p className="text-center text-sky-600">
                                                        <a href="https://verdant-capybara-9b39f3.netlify.app/" className="hover:underline">• Visit the project</a>
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center w-1/2 h-full p-6">
                                                    <Image
                                                        src="/images/project3.png"
                                                        alt="Project 3 Screenshot"
                                                        width={570}
                                                        height={300}
                                                        className="rounded-lg shadow-lg cursor-pointer"
                                                        onClick={() => window.open("https://verdant-capybara-9b39f3.netlify.app/")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="project 4"
                                title={
                                    <div
                                        onMouseEnter={() => setSelectedTab("project 4")}
                                        className="cursor-pointer  text-xl"
                                    >
                                        Project 4
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody>
                                        <div>
                                            <div className="flex items-center justify-center mb-5">
                                                <h1 className="text-3xl font-bold text-center">
                                                    Multi-purpose-app
                                                </h1>
                                            </div>
                                            <div className="flex flex-row w-full h-full ">
                                                <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4">
                                                    <p className="text-gray-600">
                                                        This project is a Multi-Purpose-app that provides various functions such as Image Resize, Teleprompter and PDF to Text Converter.
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        • Technologies Used: Next.js, HeroUI, Tailwind CSS
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        <a href="https://github.com/Vikrant465/remote-control-car" className="text-sky-600 hover:underline">• View on GitHub</a>
                                                    </p>
                                                    <p className="text-center text-sky-600">
                                                        <a href="https://image-resizer-app-pi.vercel.app/" className="hover:underline">• Visit the project</a>
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center w-1/2 h-full p-6">
                                                    <Image
                                                        src="/images/project4.png"
                                                        alt="Project 2 Screenshot"
                                                        width={650}
                                                        height={300}
                                                        className="rounded-lg shadow-lg cursor-pointer"
                                                        onClick={() => window.open("https://image-resizer-app-pi.vercel.app/")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="project 5"
                                title={
                                    <div
                                        onMouseEnter={() => setSelectedTab("project 5")}
                                        className="cursor-pointer text-xl"
                                    >
                                        Project 5
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody>
                                        <div>
                                            <div className="flex items-center justify-center mb-5">
                                                <h1 className="text-3xl font-bold text-center">
                                                    Task Diary
                                                </h1>
                                            </div>
                                            <div className="flex flex-row w-full h-full ">
                                                <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4">
                                                    <p className="text-gray-600">
                                                        This project is a Task Diary that allows users to manage their tasks efficiently. It provides features such as task creation, editing, and deletion, along with a user-friendly interface.
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        • Technologies Used: Next.js, FireBase, Tailwind CSS
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        <a href="https://github.com/Vikrant465/" className="text-sky-600 hover:underline">• View on GitHub</a>
                                                    </p>
                                                    <p className="text-center text-sky-600">
                                                        <a href="https://taskdiarytut.netlify.app/" className="hover:underline">• Visit the project</a>
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center w-1/2 h-full p-6">
                                                    <Image
                                                        src="/images/project5.png"
                                                        alt="Project 2 Screenshot"
                                                        width={650}
                                                        height={300}
                                                        className="rounded-lg shadow-lg cursor-pointer"
                                                        onClick={() => window.open("https://taskdiarytut.netlify.app/")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="project 6"
                                title={
                                    <div
                                        onMouseEnter={() => setSelectedTab("project 6")}
                                        className="cursor-pointer  text-xl"
                                    >
                                        Project 6
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody>
                                        <div>
                                            <div className="flex items-center justify-center mb-5">
                                                <h1 className="text-3xl font-bold text-center">
                                                    News Webpage
                                                </h1>
                                            </div>
                                            <div className="flex flex-row w-full h-full ">
                                                <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4">
                                                    <p className="text-gray-600">
                                                        This project is a News Webpage that provides users with the latest news articles from various categories. It features a clean and responsive design for an optimal reading experience.
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        • Technologies Used: Next.js, HeroUI, Tailwind CSS, AWS-S3, MongoDB
                                                    </p>
                                                    <p className="text-center text-gray-600">
                                                        <a href="https://github.com/Vikrant465/News_nukkad" className="text-sky-600 hover:underline">• View on GitHub</a>
                                                    </p>
                                                    <p className="text-center text-sky-600">
                                                        <a href="https://newscharchaofficial.com/" className="hover:underline">• Visit the project</a>
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center w-1/2 h-full p-6">
                                                    <Image
                                                        src="/images/project6.png"
                                                        alt="Project 6 Screenshot"
                                                        width={650}
                                                        height={300}
                                                        className="rounded-lg shadow-lg cursor-pointer"
                                                        onClick={() => window.open("https://newscharchaofficial.com/")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}
