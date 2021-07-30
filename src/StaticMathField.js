import React, { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import MathQuill from './mathquill-loader'

const StaticMathField = ({ mathquillDidMount, children, ...otherProps }) => {
  const wrapperElement = useRef(null)
  const mathField = useRef(null)

  useLayoutEffect(() => {
    if (!wrapperElement) return

    mathField.current = MathQuill.StaticMath(wrapperElement.current)
    if (mathquillDidMount) mathquillDidMount(mathField.current)
  }, [wrapperElement, children])

  return (
    <span {...otherProps} ref={wrapperElement}>
      {children}
    </span>
  )
}

StaticMathField.propTypes = {
  children: PropTypes.string,
  mathquillDidMount: PropTypes.func,
}

export default StaticMathField
