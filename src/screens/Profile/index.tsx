import { useEffect, useState } from 'react';
import { 
    Container, Header, Text, Info, MediumText, Stats, Stat,
    StatCount, TextArea, Description, User
 } from './style';

import ProfilePicture from '~/components/ProfilePicture';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

export default function Profile({ navigation }){
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUser(){
            try{
                const response = await api.get(`/users/${navigation.getParam('login')}`)
                
                const data = {
                    id: response.data.id,
                    username: response.data.login,
                    picture: response.data.avatar_url,
                    name: response.data.name,
                    location: response.data.location,
                    bio: response.data.bio,
                    repos: response.data.public_repos,
                    followers: response.data.followers,
                    following: response.data.following
                };
                
                setUser(data);

            }catch (err){
                setError(true);
            }
        }

        getUser();
    }, []);

  return (
    <Container>
        <Header>
            <ProfilePicture 
                isPicture={true}
                URLPicture={user.picture}
                shape='circle'
                width={150}
                height={150}
            />
            <Info>
                <Description>
                    <User>
                        {user.username}
                    </User>
                    <MediumText>
                        {user.name}
                    </MediumText>
                </Description>
                <Stats>
                    <Stat>
                        <Icon name="people-alt" size={22} color="#000"/>
                        <StatCount>{user.followers} seguidores</StatCount>
                    </Stat>
                    <Stat>
                        <Icon name="horizontal-rule" size={22} color="#000"/>
                        <StatCount>{user.following} seguindo</StatCount>
                    </Stat>
                </Stats>
                <Stats>
                    <Stat>
                        <Icon name="inventory" size={22} color="#000"/>
                        <StatCount>{user.repos} repos</StatCount>
                    </Stat>
                    <Stat>
                        <Icon name="place" size={22} color="#000"/>
                        <StatCount>{user.location}</StatCount>
                    </Stat>
                </Stats>
            </Info>
        </Header>
        <TextArea>
            <MediumText>
                Bio:
            </MediumText>
            <Text>
                {user.bio}
            </Text>
        </TextArea>
    </Container>
  );
    /* return (
        <Container>
            <ProfilePicture 
                isPicture={true}
                URLPicture={user.picture}
                shape='circle'
                width={90}
                height={90}
            />
            <Text>
                @{ user.username }
            </Text>
            <Text>
                { user.name }
            </Text>
            <Text>
                { user.repos }
            </Text>
            <Text>
                { user.followers }
            </Text>
            <Text>
                { user.following }
            </Text>
            <Text>
                { user.location }
            </Text>
            <Text>
                { user.bios }
            </Text>
        </Container>
    ); */
}
