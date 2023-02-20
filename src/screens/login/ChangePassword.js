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
import { useForm, Controller } from "react-hook-form";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlobalStyles from '../../../assets/css/styles';
import styles from '../../../assets/css/styles';
import SvgUri from 'react-native-svg-uri-updated';

import {endPoint} from '../../screens/Services/API/ApiConstants';
import api from '../../screens/Services/API/CallingApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ChangePassword = props => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
    getValues,
    setValue,
  } = useForm();
    const [old_password, setold_password] = useState('');
    const [new_password, setnew_password] = useState('');
    console.log(new_password,"new_password")
    const [doestnotexist, setdoestnotexist] = useState('')
    const [confirm_password, setconfirm_password] = useState('');
    const [rightIcon, setRightIcon] = useState('eye');
    const [rightIcon1, setRightIcon1] = useState('eye');
    const [rightIcon2, setRightIcon2] = useState('eye');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [passwordVisibility1, setPasswordVisibility1] = useState(true);
    const [passwordVisibility2, setPasswordVisibility2] = useState(true);
    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
      };
      const handlePasswordVisibility1 = () => {
        if (rightIcon1 === 'eye') {
          setRightIcon1('eye-off');
          setPasswordVisibility1(!passwordVisibility1);
        } else if (rightIcon1 === 'eye-off') {
          setRightIcon1('eye');
          setPasswordVisibility1(!passwordVisibility1);
        }
      };
      const handlePasswordVisibility2 = () => {
        if (rightIcon2 === 'eye') {
          setRightIcon2('eye-off');
          setPasswordVisibility2(!passwordVisibility2);
        } else if (rightIcon2 === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility2(!passwordVisibility2);
        }
      };
      const ChangePassword = async () => {
        const jsonValue:any = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
       var myJson={
          old_password:old_password,
          new_password:new_password,
          confirm_password:confirm_password,
        }
        
        const result = await api.ChangePassword(token,endPoint.CHANGE_PASSWORD,myJson);
        setnew_password(result)
    console.log(result,"uyty76")
        if (result.success == "1") {
          // setnew_password(false);
          alert("Password has been changed")
        } else {
          // setnew_password(result.data);
          alert("Password has been not changed")
        }
      }
      return ( 
        <View style={GlobalStyles.signupContainer}>
 
<View style={GlobalStyles.signupTitle}>
<View style={[styles.flexRow, styles.alignCenter, styles.width20]}>
                            <TouchableOpacity onPress={() => {
            navigation.toggleDrawer();
          }}>
                                <SvgUri source={require('../../../assets/images/dashboard/sidemenu_icon.svg')} />
                           
                            </TouchableOpacity >
                        </View>
      <Text style={GlobalStyles.signupTitleStyle}>
       Change Password
      </Text> 
    </View>

    <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Current Password</Text>
          <View style={GlobalStyles.containerPassword}>
     <View style={GlobalStyles.inputContainer}>
     <Controller
                  name="old_password"
                  control={control}
                  rules={{ required: "Current password is required." }}

                  render={(props) => (
           <TextInput
        style={GlobalStyles.passwordInput}
        placeholder="Current Password"
         placeholderTextColor="#222B2E"
         secureTextEntry={passwordVisibility}
         onChangeText={(old_password) => {
          setold_password(old_password);
          props.field.onChange(old_password);
        }}
      />
    )}
  />
  
       <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={24} color="#222B2E" style={GlobalStyles.passwordIcon}/>
        </Pressable>
          </View>
        </View> 
        {errors && errors.old_password && (
    <Text style={[styles.errorMsg]}>
      {errors.old_password.message}
    </Text>
  )}
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>New Password</Text>
          <View style={GlobalStyles.containerPassword}>
     <View style={GlobalStyles.inputContainer}>
     <Controller
                  name="new_password"
                  control={control}
                  rules={{ required: "New password is required." }}

                  render={(props) => (
           <TextInput
        style={GlobalStyles.passwordInput}
        placeholder="New Password"
         placeholderTextColor="#222B2E"
         secureTextEntry={passwordVisibility1}
        //  onChangeText={(new_password) => setnew_password(new_password)}
         onChangeText={(new_password) => {
          setnew_password(new_password);
          props.field.onChange(new_password);
        }}
      />
    )}
  />
  
       <Pressable onPress={handlePasswordVisibility1}>
          <MaterialCommunityIcons name={rightIcon1} size={24} color="#222B2E" style={GlobalStyles.passwordIcon}/>
        </Pressable>
          </View>
         
        </View> 
        {errors && errors.new_password && (
    <Text style={[styles.errorMsg]}>
      {errors.new_password.message}
    </Text>
  )}
        </View> 
        <View style={GlobalStyles.inputView}>
          <Text style={GlobalStyles.labelText}>Confirm Password</Text>
          <View style={GlobalStyles.containerPassword}>
     <View style={GlobalStyles.inputContainer}>
     <Controller
                  name="confirm_password"
                  control={control}
                  rules={{ required: "Confirm password is required." ,
                  pattern: {
                    value: new_password,
                    message: "The confirm password and new password must match",
                  },
                }}

                  render={(props) => (
           <TextInput
        style={GlobalStyles.passwordInput}
        placeholder="Confirm Password"
         placeholderTextColor="#222B2E"
         secureTextEntry={passwordVisibility2}
        //  onChangeText={(confirm_password) => setconfirm_password(confirm_password)}
         onChangeText={(confirm_password) => {
          setconfirm_password(confirm_password);
          props.field.onChange(confirm_password);
        }}
      />
    )}
  />
  
       <Pressable onPress={handlePasswordVisibility2}>
          <MaterialCommunityIcons name={rightIcon2} size={24} color="#222B2E" style={GlobalStyles.passwordIcon}/>
        </Pressable>
          </View>
          {errors && errors.confirm_password && (
    <Text style={[styles.errorMsg]}>
      {errors.confirm_password.message}
    </Text>
  )}
           {
              errors?.confirm_password?.message === "The confirm password and new password must match" && 'The confirm password and new password must match' ? <Text style={styless.errorMsg}>{errors?.confirm_password?.message === "The confirm password and new password must match" && 'The confirm password and new password must match'}</Text> : null
            }
        </View> 
        <TouchableOpacity style={GlobalStyles.loginBtn} onPress={handleSubmit(ChangePassword)}>
       <Text style={GlobalStyles.loginText} onPress={handleSubmit(ChangePassword)}>Submit</Text> 
     </TouchableOpacity>    
        </View> 
            </View>
      );
};
export default ChangePassword;