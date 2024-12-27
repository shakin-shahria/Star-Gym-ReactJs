import React from 'react'

export default function Hero() {
  return (
     <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>

        <div className='flex flex-col gap-4'>
        <p>Welcome</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl' >Star<span className='text-blue-400' >Gym</span></h1>

        </div>
        
        <p className='text-sm md:text-base font-light'>Push boundaries, track progress, and crush goals. Whether you're a beginner or a pro, this app has your back. Let’s build a <span className='text-blue-400 font-medium'>stronger, healthier</span> you!</p>

        {/* <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button> */}


            <button className='px-8 py-4 rounded-md border-2px'
            ><p>Accept & Begin</p></button>
    </div>
  )
}
