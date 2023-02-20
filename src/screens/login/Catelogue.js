import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Dimensions
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlobalStyles from '../../../assets/css/styles';

const Catelogue=props => {
    const [email, setEmail] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [brand, setBrand] = useState('');
    const [code, setCode] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setsubCategory] = useState('');
    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');


    return ( 
        <ScrollView>
             <View style={GlobalStyles.signupContainer}>

<View style={GlobalStyles.signupTitle}>
{/* <TouchableOpacity onPress={() => actionHandler('bt_add_catelogue')}>
      Add Catelogue
</TouchableOpacity> */}
      <Text style={GlobalStyles.signupTitleStyle}>
      Add Catelogue
      </Text> 
    </View>

   
            </View>
      </ScrollView>
      );
};
export default Catelogue;