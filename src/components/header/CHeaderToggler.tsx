import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CHeaderTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CHeaderToggler = forwardRef<HTMLButtonElement, CHeaderTogglerProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('header-toggler', className)

    return (
      // TODO: aria-expanded="false"
      <button
        type="button"
        className={_className}
        aria-label="Toggle navigation"
        {...rest}
        ref={ref}
      >
        {children ? children : <span className="header-toggler-icon"></span>}
      </button>
    )
  },
)

CHeaderToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CHeaderToggler.displayName = 'CHeaderToggler'
