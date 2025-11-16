import { useQuery } from "@tanstack/react-query"



const ReactQuery = () => {

    const fetchUsers = async()=>{
        const res =  await fetch("https://jsonplaceholder.typicode.com/users")
        return res.json()
    };


    const { data, isLoading , error}=  useQuery({
        queryKey:["user"],
        queryFn:fetchUsers
    });

    if(isLoading) return <h3>Loading ...</h3>
    if(error) return <h3> Error fetching users </h3>
 
  return (
    <div>
        {data.map( u =>(
            <p key={u.id}>{u.name}</p>
        ) )}
    </div>
  )
}

export default ReactQuery