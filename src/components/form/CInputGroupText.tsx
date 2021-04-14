import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CInputGroupTextProps extends HTMLAttributes<HTMLLabelElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'span'
   */
  component?: string | ElementType
}

export const CInputGroupText = forwardRef<HTMLLabelElement | HTMLSpanElement, CInputGroupTextProps>(
  ({ children, className, component: Component = 'span', ...rest }, ref) => {
    const _className = classNames('input-group-text', className)
    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CInputGroupText.displayName = 'CInputGroupText'
