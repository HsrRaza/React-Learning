// ⭐ Step 4: POST / PUT / DELETE using useMutation

// For modifying data.

// Example: Adding a new user.

import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'


const PostinTanStack = () => {
    const [name, setName] = useState('');
    const queryClient = useQueryClient();

    const addUser =  async(newUser)=>{
        const res =  await fetch("api/users", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(newUser)
        });
        return res.json();
    }

    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries(["users"]);
            setName('');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        mutation.mutate({ name });
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default PostinTanStack