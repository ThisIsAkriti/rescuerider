'use client'
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useState } from "react"

const Body = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/users" , {name, email});
            console.log(res);

            setName('');
            setEmail('');
        } catch(err) {
            console.error("the error is : " + err);
        }
    }
  return (
    <div>
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">

            <h1 className="font-bold text-3xl">Welcome To Rescue Rider</h1>
            <Button>In Progress!</Button>
              
            <form onSubmit={handleSubmit} className="mt-10">
              
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Button type="submit">Submit</Button>
            </form>
              
              <div>
                  <h2>{name}</h2>
                  <h2>{email}</h2>
              </div>
        </div>

    </div>
  )
}

export default Body
