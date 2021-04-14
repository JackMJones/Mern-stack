import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CSidebarTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CSidebarToggler = forwardRef<HTMLButtonElement, CSidebarTogglerProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-toggler', className)
    return (
      <button className={_className} ref={ref} {...rest}>
        {children}
      </button>
    )
  },
)

CSidebarToggler.displayName = 'CSidebarToggler'
