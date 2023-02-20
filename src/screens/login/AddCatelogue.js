import React, { useState, useEffect, useReducer, useCallback } from 'react';
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
export default function AddCatelogue({ navigation }: { navigation: any }) {
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
            Supplier find images more helpful than text alone.
          </Text>
        </View>
        <View style={GlobalStyles.signupTitle}>
          <Text style={GlobalStyles.signupTitleStyle}>
            Edit Default Photo.
          </Text>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>System generated product code*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Product Name*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Brand</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Supplier product code*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Category*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Sub Category*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Status*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Hashtag*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Short Description*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
        <Text style={GlobalStyles.labelText}>Long Description*</Text>
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(name) => setName(name)}

          />
        </View>
        </View>
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Base Unit</Text>
          <Text style={GlobalStyles.labelText}>Base Unit Size</Text>
          <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(email) => setEmail(email)}
          /> 
          </View>
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Shell Life</Text>
         
          <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(email) => setEmail(email)}
          /> 
          </View>
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Critical Life</Text>
         
          <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(email) => setEmail(email)}
          /> 
          </View>
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Country Of Origin</Text>
         
          <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(country) => setCountry(country)}
          /> 
          </View>
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>ORDERING OPTIONS(SKUS)</Text>
        
          <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(order) => setOrder(order)}
          /> 
          </View>
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>CERTIFICATION</Text>
          <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(certificate) => setCertificate(certificate)}
          /> 
          </View>
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>MARKET PLACE Settings</Text>
         
          <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(place) => setPlace(place)}
          /> 
          </View>
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>LEAD TIME</Text>
         <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={GlobalStyles.signupTextInput}
            placeholder=""
            placeholderTextColor="#222B2E"
            onChangeText={(lead) => setLead(lead)}
          /> 
          </View>
        </View> 
        <Text style={GlobalStyles.paragraphStyle}>
        Promotion      offers by suppier      hotlist
        </Text>  
        
        <View style={[GlobalStyles.signupInputContainerButton, GlobalStyles.shadowProp]}>
        <TouchableOpacity style={GlobalStyles.loginBtn}>
          <Text style={GlobalStyles.loginText}>Submit</Text> 
        </TouchableOpacity> 
      </View>
      <View style={[GlobalStyles.signupInputContainerButton, GlobalStyles.shadowProp]}>
        <TouchableOpacity style={GlobalStyles.loginBtn}>
          <Text style={GlobalStyles.loginText}>Cancel</Text> 
        </TouchableOpacity> 
      </View>
      </View>

    </ScrollView>
  )
};