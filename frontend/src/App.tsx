import './App.css'

function App() {
  return (
    <>
    <div className='h-screen'> 
        <div className="flex justify-between px-2 py-2 rounded-3xl border-4 border-slate-400 font-sans shadow-2xl">
          {/* Left side */}
          <div className="px-2">
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
        <div className='flex justify-center border-4 h-1/2 rounded-3xl'>
            <h1 className='text-4xl'>
                Share Your Code with the World
            </h1>
        </div>
      </div>
    </>
  );
}


export default App
