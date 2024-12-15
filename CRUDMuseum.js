import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Profil from './App'
// import Mahasiswa from './Mahasiswa'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceSmile, faHome,faMap,faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
// import { WebView } from 'react-native-webview';
import  CreateData from './CreateData'
import DataMuseum from './ListMuseum'
import Peta from './Map'
import Homepage from './HomePage';


function HomeScreen() {
  return (
    <Homepage />
  );
}

function DataScreen() {
  return (
    <DataMuseum />
  );
}

function RateScreen() {
  return (
   <CreateData />
  );
}

function PetaScreen() {
  return (
    <Peta />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{ headerShown: false, 
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} size={20} color={color} />
          ),
         }} />
        <Tab.Screen 
        name="Museum" 
        component={DataScreen} 
        options={{ 
          headerShown: true, 
          headerTitle: 'DAFTAR MUSEUM',           
          headerTitleAlign: 'center',            
          headerStyle: { 
            backgroundColor: '#debd92',         
          },
          headerTintColor: '#fff',     
          headerTitleStyle: { 
            fontWeight: 'bold',                  
            fontSize: 20,                   
          },
          tabBarIcon: ({ color }) => (           // Ikon untuk tab bar
            <FontAwesomeIcon icon={faBuildingColumns} size={20} color={color} />
          ),
        }}
      />
        <Tab.Screen 
        name="Peta" 
        component={PetaScreen} 
        options={{ 
          headerShown: true, 
          headerTitle: 'PETA PERSEBARAN MUSEUM',           
          headerTitleAlign: 'center',            
          headerStyle: { 
            backgroundColor: '#debd92',         
          },
          headerTintColor: '#fff',     
          headerTitleStyle: { 
            fontWeight: 'bold',                  
            fontSize: 20,                   
          },
          tabBarIcon: ({ color }) => (           // Ikon untuk tab bar
            <FontAwesomeIcon icon={faMap} size={20} color={color} />
          ),
         }} />
         <Tab.Screen name="Ulasan" component={RateScreen}
        options={{ headerShown: false, 
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faFaceSmile} size={20} color={color} />
          ),
         }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}