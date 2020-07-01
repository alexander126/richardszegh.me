import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../style.config'

function getFontSize(size) {
  switch (size) {
    case 'large':
      return '1.25rem'

    case 'small':
      return '1rem'

    default:
      return '1.15rem'
  }
}

function getVerticalPadding(size) {
  switch (size) {
    case 'large':
      return '0.7rem'

    case 'small':
      return '0.45rem'

    default:
      return '0.65rem'
  }
}

function getHorizontalPadding(size) {
  switch (size) {
    case 'large':
      return '1.5rem'

    case 'small':
      return '1rem'

    default:
      return '1.35rem'
  }
}

const ButtonBase = styled.button`
  display: inline-block;
  overflow: hidden;
  margin: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  --webkit-appearance: none;
  --moz-appearance: none;
  padding-left: ${props => getHorizontalPadding(props.size)};
  padding-right: ${props => getHorizontalPadding(props.size)};
  padding-top: ${props => getVerticalPadding(props.size)};
  padding-bottom: ${props => getVerticalPadding(props.size)};
  font-size: ${props => getFontSize(props.size)};
  font-weight: 600;
  border-style: solid;
  border-width: 2px;
  border-radius: 0;
  border-color: transparent;
  transition: 0.4s;
`

const PrimaryButton = styled(ButtonBase)`
  background-color: ${SECONDARY_COLOR};
  border-color: ${SECONDARY_COLOR};
  color: ${PRIMARY_COLOR};

  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR};
  }
`

const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  border-color: ${PRIMARY_COLOR};
  color: ${PRIMARY_COLOR};

  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR};
  }
`

export default function Button({ children, variant, ...rest }) {
  if (variant === 'primary') {
    return <PrimaryButton {...rest}>{children}</PrimaryButton>
  } else if (variant === 'secondary') {
    return <SecondaryButton {...rest}>{children}</SecondaryButton>
  } else {
    return <ButtonBase {...rest}>{children}</ButtonBase>
  }
}

Button.defaultProps = {
  size: 'default',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
