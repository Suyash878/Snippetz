import Editor from '@monaco-editor/react'
import { useState } from 'react';

export const Snippet = () => 
{   
    const [link,setLink] = useState('');

    function handleClick() {
        setLink('www.example.com');
    }

    return (
        <div className='w-screen h-screen p-1'>
            <h1 className="text-4xl font-semibold font-sans text-center p-4"> 
                Share Code in Seconds
            </h1>
            <div className='flex'>
                <div className='w-[70%] flex justify-center items-center bg-black border-3 border-black rounded-lg overflow-hidden'> 
                    <Editor
                        height="80vh"
                        defaultLanguage="javascript"
                        defaultValue="// Start coding here..."
                        theme="vs-dark"
                        options={{
                            fontSize: 14,
                            minimap: { enabled: true  },
                        }}
                        onMount={(editor, monaco) => {
                            // Additional configurations or event listeners
                        }}
                    />
                </div>
                <div className='border-4 h-4/3 bg-slate-100 font-semibold rounded-lg p-4 font-sans text-2xl border-blue w-[30%]'>
                    <div className='h-1/6'>
                    </div>
                        <h2 className=''>
                            Share Link
                        </h2>
                        <p className='font-light text-sm py-1 text-slate-400'> Share your code with a simple <br /> Link worldwide. </p>
                            <div className='pb-1'> 
                                <button onClick={handleClick} className='bg-black  hover:bg-slate-700 text-white p-2 rounded-lg text-center text-sm'>
                                    Generate Link
                                </button>
                            </div>
                        <br />
                            <div className='w-[90%] p-2 text-sm cursor-pointer text-blue-600 underline border-4 border-slate-200 bg-slate-100 rounded-lg'>
                                {link}
                            </div>
                </div>
            </div>

        </div>
    )


}