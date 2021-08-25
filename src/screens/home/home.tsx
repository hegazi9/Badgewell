import React, {useEffect} from 'react';
import {View, Text, FlatList ,  Image} from 'react-native';
import styles from './styles';
import {Container, Header} from '../../components';
import {HOME, NAME, PHONE} from '../../utils/constance';
import {useDispatch, useSelector} from 'react-redux';
import {getcontacts} from '../../redux/actions';
import {Loading} from '../../components/loading';
import {COLORS} from '../../common';

interface Props 
{
  navigation : any ,
  route : any
}
let page = 1;
const Home : React.FC <Props> = ({navigation , route }) => {
  const dispatch = useDispatch();
  const contact = useSelector((state : any )=> state.contactState.contact);
  const loading = useSelector((state : any ) => state.contactState.loading);
  const nextPage = useSelector((state : any )=> state.contactState.nextPage);
  
  useEffect(() => {
    dispatch(getcontacts(page));
  }, []);

  const handlemore = () => {
    page = page + 1;
    if(nextPage)
    dispatch(getcontacts(page));
  };

  const userItem = ({item} : {item:any}) => {
    return (
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode="center"
            style={styles.img}
            source={{uri: item?.image}}
          />
          <View style={{padding: 15}}>
            <Text style={styles.name}>
              {NAME}
              {item?.name}
            </Text>
            <Text style={styles.phone}>
              {PHONE}
              {item?.phone}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const _keyExtractor = ({item} : {item:any} ) => item;

  return (
    <>
      <Container />
      <View style={styles.container}>
        <Header title={HOME} home navigation={navigation} name = {route?.params?.name} />
        <View style={styles.body}>
          {loading && page == 1 ? (
            <View style={styles.loading}>
              <Loading size={'large'} color={COLORS.primary} />
            </View>
          ) : (
            <View style={styles.flat}>
              <FlatList    
                data={contact}
                extraData={contact}
                renderItem={userItem}
                keyExtractor={_keyExtractor}
                onEndReachedThreshold={.01}
                onEndReached={() => handlemore()}
              />
            </View>

          )}
              { loading && page != 1 ? 
                   <View style = {{position : 'absolute' , justifyContent : 'center' , bottom : '10%' , zIndex : 1 }}>
                   <Loading size={'small'} color={COLORS.primary} /> 
                   </View>
                   : null 
              } 
        </View>
      </View>
    </>
  );
};

export default Home;
