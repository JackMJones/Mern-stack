import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Colors } from '../Types'

export interface CCalloutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
}

export const CCallout = forwardRef<HTMLDivElement, CCalloutProps>(
  ({ children, className, color, ...rest }, ref) => {
    const _className = classNames(
      'callout',
      {
        [`callout-${color}`]: color,
      },
      className,
    )

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)
