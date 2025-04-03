"use server"
import User from "@/lib/models/user.model"
import dbConnect from "@/utils/dbConnect";

interface UserType{
  clerkId: string;
  email: string;
  name: string;
  imageUrl: string;
  createdAt: Date;
}


const createUser = async(user:UserType) => {
    try {
        await dbConnect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));

    } catch (err) {
        console.error("Error while creating User: ", err)   
    }
}
export default createUser;