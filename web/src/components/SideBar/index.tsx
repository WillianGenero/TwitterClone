import React from 'react';
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Quem seguir"
            elements={[
              <FollowSuggestion
                name="Maik Brito"
                nickname="@maykbrito"
              />,
              <FollowSuggestion
                name="Rodrigo Branas"
                nickname="@rodrigobranas"
              />,
              <FollowSuggestion
              name="Lucas Montano"
              nickname="@lucas_montano"
            />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
