import './App.css'

function App() {
  return (
    <>
    <div className='h-screen w-screen font-sans'> 
        <div className="flex justify-between px-2 py-2 rounded-3xl border-4 border-slate-400 shadow-2xl">
          {/* Left side */}
          <div className="px-2 font-semibold">
            SnippetZ
          </div>

          {/* Right side */}
          <div className="flex gap-4">
            <div className="px-2">
              Features
            </div>
            <div className="px-2">
              About
            </div>
            <div className="px-2">
              Contact
            </div>
          </div>
        </div>
        <div className='flex justify-center font-extrabold border-4 h-4/5 rounded-3xl w-screen'>
          <div className='border-4 border-slate-200 text-center'>
                <h1 className='text-4xl  md:text-6xl my-64 border-4'>
                    Share Your Code with the World
                    <div className='border-4 font-extralight text-slate-400 justify-center text-sm md:text-2xl'>
                      CodeShare makes it easy to create, share, and collaborate on code <br /> snippets. 
                      Join our community of developers today.
                    </div>
                    <div className='text-sm my-2'>
                      <button className='border-4 border-black hover:bg-slate-900 hover:border-slate-900 text-sm rounded-lg bg-black text-slate-100'>
                        <div className='mx-1 my-1'>
                          Get started
                        </div>
                      </button>
                    </div>
                </h1>
          </div>
        </div>
        <div className='flex justify-center border-black bg-gray-200 w-screen border-4 h-4/5'>
          <div className='flex text-center flex-col w-screen px-6'>
                <div className='justify center font-extrabold text-4xl my-32 md:text-6xl border-4 border-slate-400'>
                    Features
                </div>
                <div className='flex justify-between p-6 text-center border-4 border-black'>
                  <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-8 md:size-12 border-4 '>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                        <div className='border-4 border-black justify-center text-2xl font-semibold'><h1>Easy Sharing</h1>
                            <div className='text-sm p-2 font-extralight text-slate-500'>
                            Share your code snippets with a simple <br />
                            link or embed them in your website.<br />
                            </div>
                        </div>
                  </div>
                  <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 md:size-12">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                        <div className='border-4 border-black justify-center text-2xl font-semibold'><h1>Fast and reliable</h1>
                        <div className='text-sm p-2 font-extralight text-slate-500'>
                            Built with performance in mind, ensuring <br />
                            your code is always accessible. 
                            </div>
                        </div>
                  </div>
                  <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 md:size-12">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                        <div className='border-4 border-black justify-center text-2xl font-semibold'><h1>Syntax Highlighting</h1>
                        <div className='text-sm p-2 font-extralight text-slate-500'>
                            Support for multiple programming <br />
                            languages with beautiful syntax <br /> highlighting.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 md:size-12">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <div className='border-4 border-black justify-center text-2xl font-semibold'><h1>Collaboration</h1>
                          <div className='text-sm p-2 font-extralight text-slate-500'>
                            Work together on code in real-time with <br />
                            other developers. <br />
                            </div>
                          </div>
                    </div>
                </div> 
            </div>  
        </div>
        <div className='flex justify-center w-screen h-1/2 items-center'>
            <div className='p-2'>
                <h1 className='text-6xl font-extrabold text-center'>
                    Join Our Community
                </h1>
                <div className='font-extralight text-2xl text-center text-slate-700 p-2'>
                    Sign up now and start sharing your code with developers around the world. It's free and always <br />will be.
                </div>
                <div className='flex items-center text-center '>
                  <input type="text" placeholder='Email address'  className='p-1 w-1/3 border-2 rounded-md border-slate-400'/>
                  <div className='text-sm p-2'>
                      <button className='border-4 border-black hover:bg-slate-900 hover:border-slate-900 text-sm rounded-lg bg-black text-slate-100'>
                        <div className='mx-1 my-1'>
                          Sign Up
                        </div>
                      </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}


export default App
