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

import {AnchorLink} from 'gatsby-plugin-anchor-links';

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

const ButtonBase = styled.button`
  ${buttonBaseCss}
`;

const PrimaryButton = styled(ButtonBase)`
  ${primaryButtonCss}
`;

const SecondaryButton = styled(ButtonBase)`
  ${secondaryButtonCss}
`;

const LinkButtonBase = styled(AnchorLink)`
  ${buttonBaseCss}
`;

const LinkPrimaryButton = styled(LinkButtonBase)`
  ${primaryButtonCss}
`;

const LinkSecondaryButton = styled(LinkButtonBase)`
  ${secondaryButtonCss}
`;

export default function Button({children, variant, link, ...rest}) {
  if (link) {
    if (variant === 'primary') {
      return <LinkPrimaryButton {...rest}>{children}</LinkPrimaryButton>;
    } else if (variant === 'secondary') {
      return <LinkSecondaryButton {...rest}>{children}</LinkSecondaryButton>;
    } else {
      return <LinkButtonBase {...rest}>{children}</LinkButtonBase>;
    }
  } else {
    if (variant === 'primary') {
      return <PrimaryButton {...rest}>{children}</PrimaryButton>;
    } else if (variant === 'secondary') {
      return <SecondaryButton {...rest}>{children}</SecondaryButton>;
    } else {
      return <ButtonBase {...rest}>{children}</ButtonBase>;
    }
  }
}

Button.defaultProps = {
  link: false,
  size: 'default',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  link: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'default', 'small']),
};
