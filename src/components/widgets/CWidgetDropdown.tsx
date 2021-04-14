import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Colors } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'

export interface CWidgetDropdownProps extends HTMLAttributes<HTMLDivElement> {
  action?: string | ElementType
  chart?: string | ElementType
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
  title?: string
  value?: string | number
}

export const CWidgetDropdown = forwardRef<HTMLDivElement, CWidgetDropdownProps>(
  ({ action, chart, className, color, title, value, ...rest }, ref) => {
    const _className = classNames(
      { [`bg-${color}`]: color, 'text-high-emphasis-inverse': color },
      className,
    )

    return (
      <CCard className={_className} {...rest} ref={ref}>
        <CCardBody className="pb-0 d-flex justify-content-between align-items-start">
          <div>
            {value && <div className="fs-4 fw-semibold">{value}</div>}
            {title && <div>{title}</div>}
          </div>
          {action}
        </CCardBody>
        {chart}
      </CCard>
    )
  },
)

CWidgetDropdown.displayName = 'CWidgetDropdown'
