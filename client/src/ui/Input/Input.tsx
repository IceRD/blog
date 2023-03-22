import React, { FC } from 'react'
import { Props } from './Input.types'
import cn from 'classnames'

const clasess = [
    'block',
    'w-full',
    'rounded',
    'text-slate-600',
    'focus:border-primary-dark',
]

const Input: FC<Props> = ({ name, className, ...props }) => {
    return (
        <label className="block mb-4">
            <input className={cn(clasess)} {...props} />
        </label>
    )
}

export default Input
