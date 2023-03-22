import React, { FC } from 'react'
import { Props } from './GuestLayout.types'
import { Navigate, Outlet } from 'react-router-dom'
import { POSTS_ROUTE } from '~/router/constants'

const GuestLayout: FC<Props> = () => {
    // const user = false

    // if (!user) {
    //     return <Navigate to={{ pathname: POSTS_ROUTE }} replace={true} />
    // }

    return (
        <main className="flex justify-center items-center h-screen">
            <Outlet />
        </main>
    )
}

export default GuestLayout
