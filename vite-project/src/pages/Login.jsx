import React from "react"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = data
        console.log(data)
        try {
            const { data } = await axios.post('./login', {
                email,
                password
            })
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({});
                navigate('/dashboard')
            }
        }
        catch (errro) {

        }
    }
    return (
        <div className="flex justify-center items-center flex-col bg-white gap-4 rounded-2xl p-8">
            <h1 className="text-2xl font-medium">Login to your Account</h1>
            <form className="flex flex-col bg-white gap-4" onSubmit={loginUser}>
                <label className="w-96 ">Email</label>
                <input className="w-96 border-solid border-2 border-gray-400 rounded p-2" type="text" placeholder="Enter email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label className="w-96 ">Password</label>
                <input className="w-96 border-solid border-2 border-gray-400 rounded p-2" type="text" placeholder="Enter password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button className="bg-blue-900 rounded h-14 text-white my-12" type="submit">button</button>
            </form>
            <code className="">New to MyApp?<Link to='/register' className="text-blue-600"> Sign Up</Link></code>
        </div>
    )
}

export default Login
