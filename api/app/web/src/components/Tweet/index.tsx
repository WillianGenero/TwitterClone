import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Elon Musk</strong>
            <span>@elonmusk</span>
            <Dot />
            <time>22 de mai</time>
          </Header>

          <Description>The medium is the message</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              4,7 mil
            </Status>
            <Status>
              <RetweetIcon />
              62,8 mil
            </Status>
            <Status>
              <LikeIcon />
              368,5 mil
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
