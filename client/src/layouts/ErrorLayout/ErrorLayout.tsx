import React, { FC } from 'react'
import { Props } from './ErrorLayout.types'
import { Outlet } from 'react-router-dom'

const ErrorLayout: FC<Props> = () => {
    return (
        <main className="flex justify-center items-center h-screen">
            <Outlet />
        </main>
    )
}

export default ErrorLayout
