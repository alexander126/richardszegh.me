import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {PRIMARY_COLOR, getSectionPadding} from '../../../style.config';

import {Grid} from '@material-ui/core';

import Container from '../../layout/Container';

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = styled.section`
  background-color: ${props =>
    props.background === 'primary' ? PRIMARY_COLOR : '#fff'};
  color: ${props => (props.background === 'primary' ? '#fff' : PRIMARY_COLOR)};
  padding-top: ${props => getSectionPadding(props.padding)};
  padding-bottom: ${props => getSectionPadding(props.padding)};
  overflow: hidden;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
`;

export default function Contact({id, title, background, padding}) {
  return (
    <ContactSection id={id} background={background} padding={padding}>
      <Container>
        {title && <ContactTitle>{title}</ContactTitle>}

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ContactForm background={background} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
}

Contact.defaultProps = {
  background: 'white',
  padding: 'default',
};

Contact.propTypes = {
  title: PropTypes.string,
  background: PropTypes.oneOf(['primary', 'white']),
  padding: PropTypes.oneOf(['large', 'default', 'small']),
};
