import { IoIosArrowDown } from 'react-icons/io';

const Header2 = () => {

    const cities = [
        {
            name: 'Bangalore',
        },
        {
            name: 'Chennai',
        },
        {
            name: 'Delhi',
        },
        {
            name: 'Gurgaon',
        },
        {
            name: 'Hyderabad',
        },
        {
            name: 'Kolkata',
        },
        {
            name: 'Mumbai',
        },
        {
            name: 'Noida',
        },
        {
            name: 'Pune',
        },
        {
            name: 'All Cities',
        },
    ];
  return (
    <div className='w-full bg-[#f3f5f7] px-20 flex items-center justify-between'>
        { cities.map((item, index) => (
            <h2 className='flex font-thin items-center text-sm h-full py-2 px-6 hover:bg-[#fefefe] cursor-pointer opacity-75 gap-1' key={index}>{item.name} <IoIosArrowDown size={14} /></h2>
        ))}
    </div>
  )
}

export default Header2
