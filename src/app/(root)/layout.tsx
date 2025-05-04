import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='font-work-sans'>
        {children}
    </main>
  )
}

export default Layout


