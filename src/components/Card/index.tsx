import React from 'react';
import { View } from 'react-native';
import { Container, CardContent } from './style';

export default function Card(props) {
  return (
    <Container>
      <CardContent>
        { props.children }
      </CardContent>
    </Container>
  );
}

