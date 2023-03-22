import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { GuestLayout, UserLayout, ErrorLayout } from '~/layouts'
import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    POSTS_ROUTE,
} from '~/router/constants'
import { Error, Login, Registration, Posts } from '~/pages'

const AppRouter = () => (
    <Routes>
        <Route element={<GuestLayout />}>
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={REGISTRATION_ROUTE} element={<Registration />} />
        </Route>

        <Route element={<UserLayout />}>
            <Route path={POSTS_ROUTE} element={<Posts />} />
        </Route>

        <Route element={<ErrorLayout />}>
            <Route path="*" element={<Error />} />
        </Route>
    </Routes>
)

export default AppRouter
