
import { Bell, BriefcaseBusiness, HomeIcon, MessageCircleMore, Users } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
type NAVITEMS = {
  src : string,
  icon : JSX.Element,
  text: string
}

const navItems : NAVITEMS[] = [
  {
    src: "/home",
    icon: <HomeIcon />,
    text: "Home",
  },
  {
    src: "/networks",
    icon: <Users />,
    text: "My Networks",
  },
  {
    src: "/job",
    icon: <BriefcaseBusiness />,
    text: "Jobs",
  },
  {
    src: "/message",
    icon: <MessageCircleMore />,
    text: "Messing",
  },
  {
    src: "/notification",
    icon: <Bell />,
    text: "notification",
  },
]

const NavItems = () =>{
  return(
    <div className='flex gap-8'>
      {
      navItems.map((navItems, index) => {
        return(
          <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black'>
           <span>{navItems.icon}</span>
           <Link className='text-xs' href={navItems.src}>{navItems.text}</Link>
          </div>
        )
      })
    }
    </div>
  )
}
export default NavItems
