import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {IconContext} from 'react-icons';

import {Grid} from '@material-ui/core';

const Content = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Header = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 960px) {
    margin-bottom: 0;
    height: 175px;
  }

  @media (min-width: 992px) {
    height: 150px;
  }
`;

const DescriptionContainer = styled.div`
  flex-grow: 1;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const DescriptionList = styled.ul`
  text-align: left;
`;

const DescriptionListItem = styled.li``;

export default function ServiceListingItem({icon, title, description}) {
  return (
    <Grid item xs={12} md={4}>
      <Content>
        <Header>
          <IconContext.Provider
            value={{
              color: 'inherit',
              size: '4rem',
            }}
          >
            <Icon>{icon}</Icon>
          </IconContext.Provider>

          <Title>{title}</Title>
        </Header>

        <DescriptionContainer>
          {Array.isArray(description) ? (
            <DescriptionList>
              {description.map((item, index) => (
                <DescriptionListItem key={index}>{item}</DescriptionListItem>
              ))}
            </DescriptionList>
          ) : (
            <Description>{description}</Description>
          )}
        </DescriptionContainer>
      </Content>
    </Grid>
  );
}

ServiceListingItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]),
};
