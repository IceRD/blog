import { FC, createElement } from 'react'
import { Props } from './ButtonLink.types'
import cn from 'classnames'

const clasess = [
    'font-medium',
    'rounded',
    'px-4',
    'py-2',
    'focus:outline-none',
    'text-primary',
    'bg-white',
    'hover:bg-white',
    'hover:text-primary-dark',
]

const ButtonLink: FC<Props> = ({ block, children, className, ...props }) => {
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

export default ButtonLink
