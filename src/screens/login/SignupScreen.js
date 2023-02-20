import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import { useForm, Controller } from "react-hook-form";

import {
  View,
  Alert,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from '../../../assets/css/styles';
import api from '../../screens/Services/API/CallingApi';
import { endPoint } from '../../screens/Services/API/ApiConstants';
import { Form, FormItem, Picker, } from 'react-native-form-component';
import * as Urls from '../../constant/Urls';
import SvgUri from 'react-native-svg-uri-updated';
import ModalSelector from 'react-native-modal-selector';
import RBSheet from "react-native-raw-bottom-sheet";
import { Button } from 'react-native-paper';
const EMAIL_REGEX = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]/;

const SignupScreen = props => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
    getValues,
    setValue,
  } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [countryCode, setcountryCode] = useState('');

  
  const [number, setNumber] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('971');
  const [errortext, setErrortext] = useState('');
  //const icon = 'https://svgshare.com/i/pSH.svg';


  const handleSubmitPress = async () => {
    var myJson = {
      "company_name": companyName,
      "firstname": firstname,
      "lastname": "WM12",
      "email": email,
      "password": password,
      "cpassword": conPassword,
      "countrycode": "971",
      "mobile_no": mobileNumber,
      "address": address,
      "country": "UAE",
      "city": "Dubai"
    }
    console.log(myJson, "oi7856g66")

    const result = await api.createSupplier(endPoint.create_Supplier, myJson);
    console.log(result, "67676778787878")

    if (result) {
      Alert.alert(result.message)
      setUserdata(false)
    } else {
      setUserdata(true)
    }
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState(require('../../../assets/images/dashboard/eye_splash_icon.svg'));
  const [rightIcon1, setRightIcon1] = useState(require('../../../assets/images/dashboard/eye_splash_icon.svg'));
  const { width, height } = Dimensions.get('window');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  //password hide and show
  const handlePasswordVisibility = () => {
    if (rightIcon === require('../../../assets/images/dashboard/eye_splash_icon.svg')) {
      setRightIcon(require('../../../assets/images/dashboard/eye_icon.svg'));
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === require('../../../assets/images/dashboard/eye_icon.svg')) {
      setRightIcon(require('../../../assets/images/dashboard/eye_splash_icon.svg'));
      setPasswordVisibility(!passwordVisibility);
    }
  };
  //confirm password hide and show
  const handlePasswordVisibility1 = () => {
    if (rightIcon1 === require('../../../assets/images/dashboard/eye_splash_icon.svg')) {
      setRightIcon1(require('../../../assets/images/dashboard/eye_icon.svg'));
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon1 === require('../../../assets/images/dashboard/eye_icon.svg')) {
      setRightIcon1(require('../../../assets/images/dashboard/eye_splash_icon.svg'));
      setPasswordVisibility(!passwordVisibility);
    }
  };

  // country code 
  const CountryCode = [
    { key: 1, label: 'UAE (+971)' }
  ]

  //RBSheet
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={[styles.flex1]}>
      <ScrollView style={[styles.whiteBg]}>

        <View style={styles.signupTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.befloginarrow]}>
            <SvgUri source={require('../../../assets/images/dashboard/left_arrow.svg')} />
          </TouchableOpacity>
          <Text style={[styles.signupTitleStyle, styles.textBlack, styles.fontSemi]}>
            Sign Up
          </Text>
        </View>

        <Text style={styles.signupParagraph}>
          * Mandatory Fields are required
        </Text>

        <View style={styles.backgrey}>
          <View style={styles.signupInputContainer}>

            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Company Name*</Text>
              <View>
                <Controller
                  name="companyName"
                  control={control}
                  rules={{ required: "Company name is required." }}

                  render={(props) => (
                    <TextInput
                      style={[styles.inputStyle, styles.fontMed]}
                      placeholder="Company Name"
                      placeholderTextColor="#222B2E"
                      onChangeText={(companyName) => {
                        props.field.onChange(companyName);

                        setCompanyName(companyName)
                      }}
                    />
                  )}
                />
                {errors && errors.companyName && (
                  <Text style={[styles.errorMsg]}>
                    {errors.companyName.message}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Registration No*</Text>
              <View>
                
                <Controller
                  name="code"
                  control={control}
                  rules={{ required: "Registration number is required." }}

                  render={(props) => (
                    <TextInput
                      style={[styles.inputStyle, styles.fontMed]}
                      placeholder="Registration No"
                      placeholderTextColor="#222B2E"
                      // onChangeText={(email) => setEmail(email)}
                      onChangeText={(code) => {
                        setCode(code);
                        props.field.onChange(code);
                      }}
                    />
                  )}
                />
                {errors && errors.code && (
                  <Text style={[styles.errorMsg]}>
                    {errors.code.message}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Contact Person Name*</Text>
              <View>
              <Controller
                  name="firstname"
                  control={control}
                  rules={{ required: "Contact person name is required." }}

                  render={(props) => (
                <TextInput
                  style={[styles.inputStyle, styles.fontMed]}
                  placeholder="Contact Person Name"
                  placeholderTextColor="#222B2E"
                  onChangeText={(firstname) => {
                    setFirstname(firstname);
                    props.field.onChange(firstname);
                  }}
                />
              )}
            />
            {errors && errors.firstname && (
              <Text style={[styles.errorMsg]}>
                {errors.firstname.message}
              </Text>
            )}
              </View>
            </View>

            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Email Id*</Text>
              <View>
              <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required." ,
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Email is Invalid",
                  },
                }}

                  render={(props) => (
                <TextInput
                  style={[styles.inputStyle, styles.fontMed]}
                  placeholder="Email"
                  placeholderTextColor="#222B2E"
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
          </View>
        </View>

        <View style={styles.backgrey}>
          <View style={styles.signupInputContainer}>
            <View style={[styles.imageIcon, styles.inputView]}>
              <View style={[styles.width40, styles.padR7]}>
                <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Country Code*</Text>
                <View>
                  <SvgUri source={require('../../../assets/images/dashboard/dropdown.svg')} style={[styles.modalDropDown]} />
                  
                  <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email id is required." }}

                  render={(props) => (
                  <ModalSelector
                    data={CountryCode}
                    initValue="Select"
                    selectStyle={[[styles.inputStyle, styles.fontMed], styles.flexRow, styles.alignCenter, styles.justifyStart]}
                    initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                    overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                    optionContainerStyle={[styles.width300px]}
                    cancelStyle={[styles.width300px, styles.marHorauto]}
                    optionTextStyle={[styles.textBlack, styles.font15]}
                    cancelTextStyle={[styles.textBlack, styles.font15]}
                    onChangeText={(countryCode) => {
                      setcountryCode(countryCode);
                      props.field.onChange(countryCode);
                    }}
                  />
                )}
              />
              {errors && errors.countryCode && (
                <Text style={[styles.errorMsg]}>
                  {errors.countryCode.message}
                </Text>
              )}
                </View>
              </View>
              <View style={[styles.width60, styles.padL7]}>
                <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Mobile No*</Text>
                <View>
                <Controller
                  name="mobileNumber"
                  control={control}
                  rules={{ required: "Mobile number is required." }}

                  render={(props) => (
                  <TextInput
                    style={[styles.inputStyle, styles.fontMed]}
                    placeholder="Mobile No"
                    keyboardType='numeric'
                    maxLength={10}
                  
                    placeholderTextColor="#222B2E"
                    onChangeText={(mobileNumber) => {
                      setMobileNumber(mobileNumber);
                      props.field.onChange(mobileNumber);
                    }}
                  />
                )}
              />
              {errors && errors.mobileNumber && (
                <Text style={[styles.errorMsg]}>
                  {errors.mobileNumber.message}
                </Text>
              )}
                </View>
              </View>
            </View>

            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Address</Text>
              <View>
              <Controller
                  name="address"
                  control={control}
                  rules={{ required: "Address is required." }}

                  render={(props) => (
                <TextInput
                  multiline={true}
                  textAlignVertical="top"
                  numberOfLines={8}
                  style={[styles.inputStyle, styles.fontMed, styles.textArae]}
                  placeholder="Address"
                  placeholderTextColor="#222B2E"
                  onChangeText={(address) => {
                    setAddress(address);
                    props.field.onChange(address);
                  }}
                />
              )}
            />
            {errors && errors.address && (
              <Text style={[styles.errorMsg]}>
                {errors.address.message}
              </Text>
            )}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.backgrey}>
          <View style={styles.signupInputContainer}>
            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Upload Trade License</Text>
              <View>
                <TouchableOpacity style={[styles.dragDropView, styles.flexColumn, styles.alignCenter, styles.justifyCenter]} onPress={() => refRBSheet.current.open()}>
                  <SvgUri source={require('../../../assets/images/dashboard/choose_file.svg')} style={[styles.mb18]} />
                  <Text style={[styles.font15, styles.textBlack, styles.mb3]}>Choose file here</Text>
                  <Text style={[styles.font12, styles.textDefault]}>Tap here to upload your TRN Certificate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.backgrey}>
          <View style={styles.signupInputContainer}>
            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Upload TRN Certificate</Text>
              <View>
                <TouchableOpacity style={[styles.dragDropView, styles.flexColumn, styles.alignCenter, styles.justifyCenter]} onPress={() => refRBSheet.current.open()}>
                  <SvgUri source={require('../../../assets/images/dashboard/choose_file.svg')} style={[styles.mb18]} />
                  <Text style={[styles.font15, styles.textBlack, styles.mb3]}>Choose file here</Text>
                  <Text style={[styles.font12, styles.textDefault]}>Tap here to upload your TRN Certificate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.backgrey}>
          <View style={styles.signupInputContainer}>
            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Password*</Text>
              <View style={styles.containerPassword}>
              <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required." }}

                  render={(props) => (
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  placeholderTextColor="#222B2E"
                  secureTextEntry={passwordVisibility}
                  onChangeText={(password) => {
                    setPassword(password);
                    props.field.onChange(password);
                  }}
                />
              )}
            />
            {errors && errors.password && (
              <Text style={[styles.errorMsg]}>
                {errors.password.message}
              </Text>
            )}
                <Pressable style={[styles.eyeIcon, styles.flexRow, styles.justifyCenter, styles.alignCenter]} onPress={handlePasswordVisibility}>
                  <SvgUri source={rightIcon} />
                </Pressable>
              </View>
            </View>

            <View style={styles.inputView}>
              <Text style={[styles.textDefault, styles.font12, styles.fontMed, styles.marBtm4]}>Confirm Password*</Text>
              <View style={styles.containerPassword}>
              <Controller
                  name="conPassword"
                  control={control}
                  rules={{ required: "Confirm password is required." }}

                  render={(props) => (
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Confirm Password"
                  placeholderTextColor="#222B2E"
                  secureTextEntry={passwordVisibility}
                  onChangeText={(conPassword) => {
                    setConPassword(conPassword);
                    props.field.onChange(conPassword);
                  }}
                />
              )}
            />
            {errors && errors.conPassword && (
              <Text style={[styles.errorMsg]}>
                {errors.conPassword.message}
              </Text>
            )}
                <Pressable style={[styles.eyeIcon, styles.flexRow, styles.justifyCenter, styles.alignCenter]} onPress={handlePasswordVisibility1}>
                  <SvgUri source={rightIcon1} />
                </Pressable>
              </View>
            </View>
            <View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* rbSheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            ...styles.rboverlayBG
          },
          draggableIcon: {
            ...styles.dragView
          },
          container: {
            ...styles.rbContainer
          }
        }}
      >
        <View style={[styles.padt50, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
          <SvgUri source={require('../../../assets/images/dashboard/upload_icon.svg')} style={[styles.mb14]} />
          <Text style={[styles.font22, styles.textBlack, styles.mb44, styles.fontBold]}>Uploading Trade License</Text>

          <View style={[styles.width100, styles.uploadPercentage, styles.flexRow, styles.alignCenter, styles.justifyCenter, styles.mb44]}>
            <View style={[styles.perBar, { width: '75%' }]}></View>
            <Text style={[styles.textPri, styles.font12, styles.fontMed]}>Uploading 75%</Text>
          </View>
          <TouchableOpacity style={[styles.cancelStyle, styles.width100, styles.flexRow, styles.justifyCenter]} onPress={() => refRBSheet.current.close()}>
            <Text style={[styles.letterSpa33, styles.font15, styles.textPri, styles.fontMed]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      {/* rbSheet - Ends */}

      {/* save & continue button */}
      <TouchableOpacity onPress={handleSubmit(handleSubmitPress)}>
        <View style={[styles.saveButtonFooter, styles.whiteBg]}>
          <Button style={[styles.primaryBg, styles.saveBtn, styles.width100]}><Text style={[styles.font15, styles.letterSpa33, styles.textWhite, styles.fontMed]}>Sign Up</Text></Button>
        </View>
      </TouchableOpacity>
      {/* save & continue button - Ends */}

    </SafeAreaView>
  );
};

export default SignupScreen;


