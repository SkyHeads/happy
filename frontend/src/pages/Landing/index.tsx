import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';

import { Container, ContentWrapper, ContentLocation } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy Logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <ContentLocation>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </ContentLocation>

        <Link to="/orphanages" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </ContentWrapper>
    </Container>
  );
}

export default Landing;