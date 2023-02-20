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

const Addtier=props => {
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
      <Text style={GlobalStyles.signupTitleStyle}>
      Add Tier
      </Text> 
    </View>

    <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Tier Name*</Text>
          <View style={GlobalStyles.containerPassword}>
     <View style={GlobalStyles.inputContainer}>
          
           <TextInput
        style={GlobalStyles.passwordInput}
        placeholder="Tier Name"
         placeholderTextColor="#222B2E"
       
         onChangeText={(tierName) => setTierName(tierName)}
       /> 
      
          </View>
        </View> 
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Select Amount Type*</Text>
          <View style={GlobalStyles.containerPassword}>
     <View style={GlobalStyles.inputContainer}>
          
           <TextInput
        style={GlobalStyles.passwordInput}
        placeholder="Amount Type"
         placeholderTextColor="#222B2E"
       
         onChangeText={(new_password) => setnew_password(new_password)}
       /> 
       
          </View>
        </View> 
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Value(%)</Text>
          <View style={GlobalStyles.containerPassword}>
     <View style={GlobalStyles.inputContainer}>
          
           <TextInput
        style={GlobalStyles.passwordInput}
        placeholder="Value"
         placeholderTextColor="#222B2E"
        
         onChangeText={(value) => setvalue(value)}
       /> 
      
          </View>
        </View> 
        <TouchableOpacity style={GlobalStyles.loginBtn1} >
       <Text style={GlobalStyles.loginText}>Submit</Text> 
     </TouchableOpacity>   
     <TouchableOpacity style={GlobalStyles.loginBtn1} >
       <Text style={GlobalStyles.loginText}>Cancel</Text> 
     </TouchableOpacity>    
        </View> 
            </View>
      </ScrollView>
      );
};
export default Addtier;