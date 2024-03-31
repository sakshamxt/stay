'use client'

const Header3 = () => {
  return (
    <div className='flex justify-center items-center w-full h-64 bg-[url("/headerBg.jpg")] bg-center bg-cover'>
        <div className='flex justify-center items-center w-full h-64 bg-black bg-opacity-30'>
            <div className='flex flex-col gap-5 items-center justify-center h-full'>
                <h1 className='text-4xl font-bold tracking-tight text-white'>Over 174,000+ hotels and homes across 35+ countries</h1>
                <div className='flex items-center font-medium'>
                    <input type="text" placeholder='Search by city, hotel, or neighborhood' className='outline-none w-[27rem] bg-white px-5 py-4 rounded-tl-sm rounded-bl-sm border-r-[2px]'/>
                    <input type="text" placeholder='Sat, 6 Apr - Sun, 7 Apr' className='outline-none w-[18rem] bg-white px-5 py-4 border-r-[2px] placeholder:text-black'/>
                    <input type="text" placeholder='1 Room, 1 Guest' className='outline-none w-[16rem] bg-white px-5 py-4 placeholder:text-black'/>
                    <button className='w-[10rem] rounded-tr-sm rounded-br-sm px-6 h-full text-white font-semibold text-lg bg-[#1abb50] hover:bg-[#128036] transition-all duration-150'>Search</button>
                </div>
                <div className='w-full gap-5 h-10 text-sm font-semibold text-white flex items-center'>
                    <h1>Continue your search</h1>
                    <button className='text-xs px-3 py-2 rounded-sm hover:bg-black hover:bg-opacity-70 border-[1px]'>Delhi 04 Apr - 07 Apr | 1 Guest</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header3
