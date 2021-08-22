import React, {useEffect} from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import styles from './styles';
import Toast from 'react-native-toast-message';
import {Container, Header} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {HOME ,NAME , PHONE} from '../../utils/constance'
const Home = () => {
  const dispatch = useDispatch();
  // const lang = useSelector(state => state.langState.locale);

  useEffect(() => {
  }, []);

  

  const _footer = ({item, index}) => {
    return (
      <View style = {styles.footer}/>
    );
  }


  const userItem = ({item, index}) => {
    return (
      <View style = {styles.card}>
        <View style = {{flexDirection : 'row'}}> 
        <Image 
          resizeMode = "center" 
          style = {styles.img} 
          source = {{uri : 'https://cdn.fakercloud.com/avatars/andreas_pr_128.jpg'}}
        />
      <View style = {{ padding : 20 }}>
      <Text style = {styles.name}>{NAME}{'Buster Rath'}</Text>
      <Text style = {styles.phone}>{PHONE}{'1-374-919-3264'}</Text>
      </View>          
      </View>
      </View>
    );
  };

  const _keyExtractor = (item, index) => index + Math.random();

  return (
    <>
       <Container />
        <View style={styles.container}>
        <Header title = {HOME} home = {true}/>
          <View style = {styles.body}>
          <FlatList
          style={styles.flat}
          showsVerticalScrollIndicator={false}
          data={[1,1,1,1,1,1,1,1]}
          // extraData={users}
          renderItem={userItem}
          keyExtractor={_keyExtractor}
          ListFooterComponent={_footer}
        />
          </View>
      </View>
    </>
  );
};

export default Home;
