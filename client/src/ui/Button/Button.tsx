import { FC, createElement } from 'react'
import { Props } from './Button.types'
import cn from 'classnames'

const clasess = [
    'font-medium',
    'rounded',
    'px-4',
    'py-2',
    'focus:outline-none',
    'text-white',
    'bg-primary',
    'hover:bg-primary-dark',
]

const Button: FC<Props> = ({ block, children, className, ...props }) => {
    if (block) {
        clasess.push('block', 'w-full')
    }

    return createElement(
        'button',
        {
            type: 'button',
            className: cn(clasess, className),
            ...props,
        },
        children,
    )
}

export default Button
