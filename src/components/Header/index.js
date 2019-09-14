import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DAShboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Hunberto Viezzer</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Humberto Viezzer"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
