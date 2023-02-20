import React, {useState} from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import { Form, FormItem, } from 'react-native-form-component';

const ForgotPasswordScreen = ({navigation}) => {
  

  const [email, setEmail] = useState('');
  

  const handleSubmitPress = () => {
    console.log('handle press code goes here')
  }

  return ( 
    <ScrollView  style={GlobalStyles.scrollViewBG}>
      
  <View style={GlobalStyles.mainContainer}>
    <View style={GlobalStyles.logo}>
       <Image source={require('../../../assets/images/logo/Layer1.png')}/>
    </View>
   
    <Form onButtonPress={() => handleSubmitPress()} buttonText={'Reset Password'} buttonStyle={GlobalStyles.buttonStyle} style={{width:'100%'}}>
      <View style={GlobalStyles.container}>
        
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.signupLabel}>Email or Mobile No</Text>
          <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required." }}

                  render={(props) => (
          <FormItem
            value={email}
            // asterik
            // onChangeText={(email) => setEmail(email)}
            // isRequired
            style={GlobalStyles.inputContainer}
            onChangeText={(email) => {
              setEmail(email);
              props.field.onChange(email);
            }}
          />
        )}
      />
      {errors && errors.email && (
        <Text style={[styles.errorMsg]}>
          {errors.email.message}
        </Text>
      )}
     </View> 
      </View>

    </Form>
  </View>
  </ScrollView>
  );
};

export default ForgotPasswordScreen;


