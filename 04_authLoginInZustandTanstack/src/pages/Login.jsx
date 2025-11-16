import React, { useState } from 'react'
import { useAuthStore } from '../store/AuthStore'
import {useMutation} from "@tanstack/react-query"
import { loginUser } from '../api/auth';

const Login = () => {


    const { login } = useAuthStore();

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e)=>{
        setForm({...form , [e.target.name] : e.target.value})
    }

    const mutation = useMutation({
        mutationFn:loginUser,
        onSuccess:(data)=>{
            login(data)  // saved globally 
            console.log(" Logged in data: ", data);
            
        },
        onError:(err)=>{
            alert(err.message)
        }
    })
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        mutation.mutate(form)
    }


    return (
        <div className='p-5 w-[300px] mx-auto mt-10 border rounded-xl'>
            <h2 className="text-xl mb-4 font-semibold">Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="border p-2 w-full mb-2"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />

                <input
                    className="border p-2 w-full mb-2"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}

                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                    disabled={mutation.isPending}
                >
                    {mutation.isPending ? "Logging in..." : "Login"}
                </button>

            </form>
        </div>
    )
}

export default Login