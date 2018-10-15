import React from 'react';
import { Button, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createDrawerNavigator, DrawerItems, ScreenProps} from 'react-navigation';

import DaftarScreen from '../DaftarScreen/DaftarScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import ContentScreen from '../HomeScreen/content/ContentScreen';
import LupaSandiScreen from '../LupaSandiScreen/LupaSandiScreen';
import KategoriScreen from '../KategoriScreen/KategoriScreen';
import SearchBar from '../HomeScreen/component/SearchBar';
import IconBar from '../HomeScreen/component/IconBar';
import DetailScreen from '../DetailScreen/DetailScreen';
import DetailProduk from '../DetailScreen/DetailProduk';
import CartScreen from '../CartScreen/CartScreen';
import CheckoutScreen from '../CheckoutScreen/CheckoutScreen';
import KurirScreen from '../KurirScreen/KurirScreen';
import PaymentStack from '../PaymentScreen/PaymentStack';

const CustomDrawerComponent = (props)=> (
  <SafeAreaView style={{flex: 1}}>
    <View>
      <Image source={require('../assets/drawer/1.jpg')}
      style={{height: 150,width: 300}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)
const HomeStack = createStackNavigator({
  Home: {
    screen: ContentScreen,
    navigationOptions: {
      headerTitle: <SearchBar/>,
      headerRight : <IconBar/>,
      headerStyle:{
        backgroundColor: '#42b549',
        elevation: 0,
      },
    }
  },
  Daftar: DaftarScreen,
  Masuk: LoginScreen,
  LupaSandi: LupaSandiScreen ,
  Kategori: KategoriScreen,
  View: DetailScreen,
  Detail: DetailProduk,
  Cart: CartScreen,
  Checkout: CheckoutScreen,
  Kurir: KurirScreen,
  Payment: {
    screen: PaymentStack,
    navigationOptions: {
      headerTitle: 'Tokopedia',
        headerTitleStyle:{
            textAlign: "center",
            flex: 0.8,
            fontSize: 18,
            fontWeight: 'normal'
            
        },
        headerStyle: {
            elevation: 0,
            borderBottomWidth: 1,
            borderColor: 'lightgrey',
        }
    }
  }
})

HomeStack.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed';
  }

  return {
    drawerLockMode,
  };
};

const DrawerStack = createDrawerNavigator({
  Home: HomeStack,
  Kategori: KategoriScreen,
  Masuk: LoginScreen,
  Daftar: DaftarScreen,
},{
  contentComponent: CustomDrawerComponent,
  drawerWidth: 300,
  contentOptions: {
    labelStyle: {
      marginLeft: 55
    }
  }
})
export default DrawerStack;
