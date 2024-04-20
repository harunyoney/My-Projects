import React from 'react'

const Login = () => {


  return (
    <div className='loginDiv'>

    <div className='h-[500px] w-11/12 sm:w-[475px] bg-white rounded-lg p-5 flex flex-col items-center'>
        <div className='flex justify-center items-center mt-2 gap-2'>
            <span className='w-[6px] h-[39px] bg-yellow-500'></span>
            <h1 className='text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase'>HEPSİ ŞURADA STORE</h1>
        </div>
        <div>
            <h3>Sign in</h3>
            <p className='font-montserrat text-labelColor text-label mt-1'>Enter your credentials to access your accont</p>

        </div>
        <form action="" className='flex flex-col text-left p-3'>
            <div>
                <label htmlFor="e-mail" className='labelFont'>Email</label>
            </div>
        </form>


    </div>


    </div>
  )
}

export default Login