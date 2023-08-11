import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const registerUser = async (e) => {
        e.preventDefault()
        const { name, email, password } = data
        console.log(data);
        try {
            const { data } = await axios.post('/register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Register sucessfull, welcome')
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex justify-center items-center flex-col bg-white gap-4 rounded-2xl p-8">
            <h1 className="text-2xl font-medium">Create Account</h1>
            <form className="flex flex-col bg-white gap-4" onSubmit={registerUser}>
                <label className="w-96 ">Name</label>
                <input className="w-96 border-solid border-2 border-gray-400 rounded p-2" type="text" placeholder="Enter name" value={data.name} onChange={(e) =>setData({ ...data, name: e.target.value})} />
                <label className="w-96">Email</label>
                <input className="w-96 border-solid border-2 border-gray-400 rounded p-2" type="text" placeholder="Enter email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})} />
                <h2 className="w-96">Password</h2>
                <input className="w-96 border-solid border-2 border-gray-400 rounded p-2" type="text" placeholder="Enter password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} />
                <button className="bg-blue-900 rounded p-4 relative top-4 text-white my-0" type="submit">Sign Up</button>
            </form>
            <p className="p-8">Aready have an account?<Link className="p-8 text-blue-600" to='/'>link to login</Link></p>
        </div>
    )
}

export default Register;
