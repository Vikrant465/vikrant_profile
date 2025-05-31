import { Image } from "@heroui/react";

export default function About() {
  return (
    <div className="flex items-center justify-center w-full h-screen p-6">
      
      <div className="flex flex-col items-center justify-center w-1/2">
        <Image
          src="/images/profile1.png"
          alt="Profile Picture"
          width={350}
          height={450}
          className="rounded-full shadow-lg"
        />
      </div>

   
      <div className="flex flex-col justify-center w-1/2 gap-4 px-6">
        <div className="flex text-4xl font-bold">About Me</div>

        <p className="text-gray-600 text-lg">
          I am a passionate B.Tech graduate in Electronics and Communication Engineering with a specialization in IoT from Netaji Subhas University of Technology. I have hands-on experience in developing software solutions, automating workflows, and creating innovative web applications.
        </p>

        <div className="text-3xl font-semibold">Education Background</div>
        <div className="flex flex-col gap-4">
            <div className=" flex flex-col gap-2 pl-6">
                <h4 className="text-2xl">B.Tech in Electronics and Communication Engineering</h4>
                <p>Netaji Subhas University of Technology</p>
                <p>Specialization : Specialization in Internet of Things (IoT)</p>
            </div>
            <div className="flex flex-col pl-6">
                <h4 className="text-2xl">Class XII</h4>
                <p>Laxman Public School , New Delhi</p>
            </div>
            <div className="flex flex-col pl-6">
                <p className="text-2xl">Class X</p>
                <p>Laxman Public School , New Delhi</p>
            </div>
        </div>
        
      </div>
    </div>
  );
}
