import { FC, createElement } from 'react'
import { Props } from './Box.types'
import cn from 'classnames'

const classes = [
    'block',
    'max-w-sm',
    'p-6',
    'bg-white',
    'border',
    'border-gray-200',
    'rounded',
    'shadow',
]

const Box: FC<Props> = ({ children, className }) => {
    return createElement('div', { className: cn(classes, className) }, children)
}

export default Box
