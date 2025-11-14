import { http } from "./http";

export const getUsers = ()=> http.get("/users")
export const createUsers = (data)=> http.post("/users", data)