import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const CanclePayment = () => {
    const navigate = useNavigate()
    const [active,setActive]=useState("Active")
    const setmenu=()=>{
        navigate('/dashboard')
    }
    return (
        <div className="bg-white rounded flex flex-row">
            <div className="flex flex-col justify-start p-8 gap-4">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-2xl font-medium  pr-32">Current Payment Details <code className="bg-cyan-200 rounded text-sky-900 text-sm">{active}</code></h1>
                    {active.length>0 && <button onClick={()=>{setActive("")}} className="text-sky-900 ">Cancel</button> }
                    
                </div>
                <div className="flex flex-col justify-between w-full">
                <h2>Basic</h2>
                <p>Phone+Tablet</p>
                </div>
                <h1 className="text-2xl font-medium">$2,000/year</h1>
                <button onClick={setmenu} className="border-solid border-2 border-sky-500 w-32 p-2 rounded text-sky-900">Change Plan</button>
                <p className="max-w-screen-sm p-2 bg-slate-400 rounded">Your Subscription has started on Jul 11th,2022 and will we renew on Jul 12th,2023</p>
            </div>
        </div>
    )
}

export default CanclePayment