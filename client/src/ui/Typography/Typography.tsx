import { FC, createElement } from 'react'
import { Props } from './Typography.types'
import cn from 'classnames'

const classes = ['text-slate-600', 'mb-4']

const Typography: FC<Props> = ({ variant, className, children }) => {
    return createElement(
        variant,
        { className: cn(classes, className) },
        children,
    )
}

export default Typography
