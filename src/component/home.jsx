import { Button , Input} from "@heroui/react";
import React,{useState} from 'react';


export default function Home() {
  
  const [userTempName , setuserTempName] = useState("");
  const [count, setcount] = useState(0); 
  const [serData,setuserData] = useState();

  const fetchProfile = async () => {
    // try {
    //   setProfile(data);
    //   setError("");
    // } catch (err) {
    //   setError(err.message);
    //   setProfile(null);
    // }
  };
  
  const handlechilck = async(e)=> {
    
    setcount(count + 1);
    console.log("clicked : ",count);
    
    const res = await fetch(`/api/lichess?username=${userTempName}`);
    const data = await res.json();
    setuserData(data);
    console.log("data : ",data);
  }

  const handleInputChange = (e)=>{
    
    setuserTempName(e.target.value)
  }

  return (
    <div className="h-full w-full">
      <div className="bg-black"></div>
      <div className="flex justify-center w-full h-full color=danger">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl text-red-600 font-extrabold text-text-light mb-2">
          Vikrant Singh
        </h1>
      </div>
      <div className="flex justify-center">
        <div className=" flex  flex-wrap gap-4">
            <Input
              type="email"
              color="danger"
              label="Enter UserName"
              placeholder="Enter User Name"
              value={userTempName}
              onChange={handleInputChange}
              className="max-w-[220px]"
            />
            <Button 
              color="primary"
              onClick={handlechilck}
              >
                Search for the profile
            </Button>
        </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
