import { create } from "zustand";


export const useUIStore = create((set) => ({
    theme:"light",
    sideBarOpen:true,

    toggleTheme:()=> set( (s) =>({theme:s.theme === "light" ? "dark" :"light"})),
    toggleSideBar:()=> set( (s)=> ({sideBarOpen: !s.sideBarOpen}))
}));