import { useEffect, useState} from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { Container, Title, Header, List, Form, Input, Submit} from './style';

import User from '~/components/User/index';
import Card from '~/components/Card/index';

import api from '~/services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
import headerImg from '~/assets/banner.png'

export default function Home({ navigation }){
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    async function getUsers(){
      try{
        const response = await api.get(`/users`);

        setUsers(response.data);
      } catch (err) {
        setError(true);
      }
    }

    getUsers();
  }, []);

  async function searchUser(){
    try{
      const response = await api.get(`/users/${input}`);
      
      console.log(response.data);

      setUsers([response.data]);

      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  async function handleRefresh(){
    try{
      const response = await api.get(`/users`);

      setUsers(response.data);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Container>
      <Header source={headerImg}>
        <Title>
          GitHub Users
        </Title>
        <Form>
          <Input
            value={input}
            error={error}
            onChangeText={setInput}
            autoCapitalize='none'
            autoCorrect={false}
            placeHolder='Buscar por usuário...'
          />
          <Submit onPress={searchUser}>
            <Icon name="search" size={22} color="#FFF"/>
          </Submit>
          <Submit onPress={handleRefresh}>
            <Icon name="refresh" size={22} color="#FFF"/>
          </Submit>
        </Form>
      </Header>
      <List
        keyboardShouldPersistTaps="handled"
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={ ({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', item)}>
            <Card>
              <User data={item} />
            </Card>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}