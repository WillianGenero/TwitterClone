import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Willian Genero</h1>
        <h2>@WillBG_</h2>

        <p>
          Sarcasmo, expectativas, deboche e piadas ruins
        </p>

        <ul>
          <li>
            <LocationIcon />
            Chapecó-SC
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de janeiro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>43</strong>
          </span>
          <span>
           <strong>36</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;
