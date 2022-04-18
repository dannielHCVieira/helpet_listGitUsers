import React from 'react';

import ProfilePicture from '~/components/ProfilePicture/index';
import { Container, Name } from './style';

export default function User({data}){
  return (
    <Container>
        <ProfilePicture 
            isPicture={true}
            URLPicture={data.avatar_url}
            shape='circle'
            width={90}
            height={90}/>
        <Name>
            {data.login}
        </Name>
    </Container>
    
  );
}