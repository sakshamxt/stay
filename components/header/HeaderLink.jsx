import { LuHotel } from 'react-icons/lu';

const HeaderLink = ({ icon, heading, subHeading }) => {

  return (
    <div className="flex tracking-[0.01rem] items-center justify-between gap-3 h-[4.5rem] px-6 border-r-[1px]">
        <div className='text-xl opacity-75'>
            <LuHotel/>
        </div>
        <div className=''>
            <h2 className='text-sm font-semibold opacity-85'>{heading}</h2>
            <p className='text-xs font-light opacity-75'>{subHeading}</p>
        </div>
    </div>
  )
}

export default HeaderLink
