import Image from "next/image"
import HeaderLink from "./HeaderLink";
import { FaUserCircle, FaGlobe } from 'react-icons/fa';

const Header1 = () => {

    const links = {
        link1: {
            icon: 'MdCardMembership',
            heading: 'Become a Member',
            subHeading: 'Additional 10% off on stays'
        },
        link2: {
            icon: 'MdCardMembership',
            heading: 'STAY for Business',
            subHeading: 'Trusted by 5000 Corporates'
        },
        link3: {
            icon: 'MdCardMembership',
            heading: 'List your property',
            subHeading: 'Start earning in 30 mins'
        },
        link4: {
            icon: 'MdCardMembership',
            heading: '0124-6201611',
            subHeading: 'Call us to Book now'
        }
    };


  return (
    <div className='flex items-center justify-between  px-20 border-b-[1px] shadow-sm'> 
        <h1 className="text-[#e92626] font-[800] text-4xl tracking-[-0.17em]">STAY</h1>
        <div className="flex items-center">
            {
                Object.keys(links).map((key) => (
                    <HeaderLink key={key} icon={links[key].icon} heading={links[key].heading} subHeading={links[key].subHeading}/>
                ))
            }

            <button className="flex items-center justify-between gap-3 h-[4.5rem] px-6 border-r-[1px]  hover:bg-[#f2f2f2] transition-all duration-150">
                <div className='text-xl'>
                    <FaGlobe/>
                </div>
                <div className=''>
                    <h2 className='text-sm font-semibold'>English</h2>
                </div>
            </button>
            <button className="flex items-center justify-between gap-3 h-[4.5rem] px-6 border-r-[1px] border-l-[1px] border-transparent hover:bg-[#f2f2f2] hover:border-[#e5e7eb] transition-all duration-150 ml-3">
                <div className='text-xl'>
                    <FaUserCircle/>
                </div>
                <div className=''>
                    <h2 className='text-sm font-semibold'>Login / Signup</h2>
                </div>
            </button>

        </div>
    </div>
  )
}

export default Header1
