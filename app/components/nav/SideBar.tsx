import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { MdDashboard } from 'react-icons/md'
import NavLink from './NavLink'
import Logo from '../defaults/Logo'
export const NAV_LINKS =[
    {
    label: "home",   
    link: "/",
    icon: <GoHomeFill/>  
    } ,
{
    label: "category",   
    link: "/category",
    icon: <MdDashboard/>   
},
{
    label: "wishlist",   
    link: "/Wishlist",
    icon: <FaHeart/>   
},
{
    label: "friends",   
    link: "/friends",
    icon: <BsFillPeopleFill/>   
}]
 const SideBar = () => {
   
  return ( 
    <div className='col-span-2 flex flex-col gap-3'>
        <div className='py-5  px-10 flex-col items-start h-screen sticky inset-0 flex'>
            <Logo/>
              {NAV_LINKS.map((navLink)=> <NavLink navLink={navLink}/>)}
        </div>
        
      
    </div>
  )
}
export default SideBar