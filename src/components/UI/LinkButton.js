import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  getButtonFontSize,
  getButtonHorizontalPadding,
  getButtonVerticalPadding,
} from '../../style.config';

const buttonBaseCss = css`
  display: inline-block;
  overflow: hidden;
  margin: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  --webkit-appearance: none;
  --moz-appearance: none;
  padding-left: ${props => getButtonHorizontalPadding(props.size)};
  padding-right: ${props => getButtonHorizontalPadding(props.size)};
  padding-top: ${props => getButtonVerticalPadding(props.size)};
  padding-bottom: ${props => getButtonVerticalPadding(props.size)};
  font-size: ${props => getButtonFontSize(props.size)};
  font-weight: 600;
  border-style: solid;
  border-width: 2px;
  border-radius: 0;
  border-color: transparent;
  transition: 0.4s;
`;

const primaryButtonCss = css`
  background-color: ${SECONDARY_COLOR};
  border-color: ${SECONDARY_COLOR};
  color: ${PRIMARY_COLOR};

  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR};
  }
`;
const secondaryButtonCss = css`
  background-color: transparent;
  border-color: ${PRIMARY_COLOR};
  color: ${PRIMARY_COLOR};

  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR};
  }
`;

const ButtonBase = styled.a`
  ${buttonBaseCss}
`;

const PrimaryButton = styled(ButtonBase)`
  ${primaryButtonCss}
`;

const SecondaryButton = styled(ButtonBase)`
  ${secondaryButtonCss}
`;

function LinkButton({children, variant, link, ...rest}) {
  if (variant === 'primary') {
    return <PrimaryButton {...rest}>{children}</PrimaryButton>;
  } else if (variant === 'secondary') {
    return <SecondaryButton {...rest}>{children}</SecondaryButton>;
  } else {
    return <ButtonBase {...rest}>{children}</ButtonBase>;
  }
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
};

LinkButton.defaultProps = {
  size: 'default',
};

export default LinkButton;
