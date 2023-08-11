import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate=useNavigate();
    const setPaymemt=()=>{
        navigate('/canclepayment')
    }
    return (
        <div className="bg-white rounded flex flex-row">
            <div className="flex flex-col p-16 gap-4">
                <h1 className="text-2xl font-medium">Complete Payment</h1>
                <h1>Enter your credit or debit card details below</h1>
                <input className="p-2 border bg-slate-200 border-b-indigo-500 rounded" placeholder="Card number                       MM/YY   CVC"/>
                <button onClick={setPaymemt} className="bg-blue-900 rounded h-14 text-white">Confirm Payment</button>
            </div>
            <div className="flex flex-col justify-center p-8 bg-slate-200 gap-2 w-80 rounded">
                <h1 className="text-2xl font-medium p-2">Order Summary</h1>
                <div className="flex justify-between border bg-slate-200 border-b-indigo-500 p-2"><h1>Plan Name</h1><h1>Basic</h1></div>
                <div className="flex justify-between border bg-slate-200 border-b-indigo-500 p-2"><h1>Billing Cycle</h1><h1>Monthly</h1></div>
                <div className="flex justify-between border bg-slate-200 border-b-indigo-500 p-2 "><h1>Plan Price</h1><h1>$200/mo</h1></div>
            </div>
        </div>
    )
}

export default Payment