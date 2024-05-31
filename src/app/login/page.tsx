'use client'
import { useEffect, useState } from "react"
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {

    const router = useRouter()
    const [user , setUser] = useState({
        email :"",
        password : ""
    })

    const [buttonDisabled , setbuttonDisabled] = useState(true);

    const [loading , setloading] = useState(false)

    const onLogin = async ()=>{
        try {
            setloading(true)
            const response = await axios.post("/api/users/login",user)
            console.log(response);

            toast.success("user Login Sucessfully..!")
            router.push("/profile")

        } catch (error : any) {
            console.log("Login Failed ..!")
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0  ){
            setbuttonDisabled(false)
        }else{
            setbuttonDisabled(true)
        }
    },[user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing" : "Signup"}</h1>
        <hr />

        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No Login" : "Login"}</button>
            <Link href="/signup">Visit signup page</Link>
        </div>
    )
}

export default LoginPage;
