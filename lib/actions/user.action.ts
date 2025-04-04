"use server"
import User from "@/lib/models/user.model"
import dbConnect from "@/utils/dbConnect";


const createUser = async(user : unknown) => {
    try {
        await dbConnect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));

    } catch (err) {
        console.error("Error while creating User: ", err)   
    }
}
export default createUser;