import React from 'react';

import { Container, Foundation, Image, Title } from './styles';

import unitedImg from '../../assets/united.png';

export function Card() {
  return (
    <Container>
      <Image 
        source={unitedImg} 
        resizeMode="contain"
        animation="pulse"
        iterationCount="infinite"
        direction="alternate"
        duration={500}
      />

      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}