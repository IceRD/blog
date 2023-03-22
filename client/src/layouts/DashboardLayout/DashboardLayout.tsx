import React, { FC } from 'react'
import { Props } from './DashboardLayout.types'
import { Outlet } from 'react-router-dom'

const DashboardLayout: FC<Props> = () => {
    return (
        <main className="flex justify-center items-center h-screen">
            <Outlet />
        </main>
    )
}

export default DashboardLayout
