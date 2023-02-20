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
import SvgUri from 'react-native-svg-uri-updated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../../assets/css/styles';

export default function SupplierProfile({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [email, setEmail] = useState('');
  const [designation, setdesignation] = useState('');
  const [mobile, setmobile] = useState('');
  const [address, setaddress] = useState('');
  const [address1, setaddress1] = useState('');
  const [address2, setaddress2] = useState('');
  const [id, setId] = useState('');
  const [Notified, setNotified] = useState('');
 
  return (
    <ScrollView style={[styles.whiteBg]}>
      {/* profile header */}
      <View style={[styles.profileHeader, styles.primaryBg]}>
      <TouchableOpacity onPress={() => {
            navigation.toggleDrawer();
          }}>
          <SvgUri source={require('../../../assets/images/dashboard/sidemenu_icon.svg')} />
        </TouchableOpacity>
        <View style={[styles.flexColumn, styles.alignCenter]}>
          <Image source={require('../../../assets/images/dashboard/profile_icon.png')} style={[styles.profilelogo, styles.resizeContain, styles.mb9]}></Image>
          <Text style={[styles.textWhite, styles.fontBold, styles.mb4, styles.font16]}>Haadiya Talwar</Text>
          <Text style={[styles.textWhite, styles.mb16, styles.font14]}>+971 9874 5678</Text>
          <TouchableOpacity style={[styles.whiteBg, styles.editProfileBtn, styles.mb28]} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={[styles.font12, styles.textPri]}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.font13, styles.textWhite, styles.mb6]}>Profile Completion : 87%</Text>
        <View style={[styles.profileprogressBg]}>
          <View style={[styles.whiteBg, styles.progressBar, { width: '87%' }]}></View>
        </View>
      </View>
      {/* profile header - Ends */}

      {/* profile container */}
      <View style={[styles.profileContainer]}>
        <Text style={[styles.font14, styles.textBlack, styles.mb16, styles.fontBold]}>Personal Information</Text>

        <View style={[styles.mb20]}>
          <Text style={[styles.textDefault, styles.font13, styles.mb9]}>Email ID</Text>
          <TextInput
            style={[styles.inputStyle, styles.borderRadius0, styles.borderDefault]}
            placeholder="Email"
            placeholderTextColor="#222B2E"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={[styles.mb20]}>
          <Text style={[styles.textDefault, styles.font13, styles.mb9]}>Registration ID</Text>
          <TextInput
            style={[styles.inputStyle, styles.borderRadius0, styles.borderDefault]}
            placeholder="Registration No"
            placeholderTextColor="#222B2E"
            onChangeText={(id) => setId(id)}
          />
        </View>

        <View style={[styles.flexRow, styles.mb20]}>
          <View style={[styles.width40]}>
            <Text style={[styles.textDefault, styles.font13, styles.mb9]}>Country Code</Text>
            <TextInput
              style={[styles.inputStyle, styles.borderRadius0, styles.borderDefault]}
              placeholder="+971"
              placeholderTextColor="#222B2E"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={[styles.width60]}>
            <Text style={[styles.textDefault, styles.font13, styles.mb9]}>Mobile No</Text>
            <TextInput
              style={[styles.inputStyle, styles.borderRadius0, styles.borderDefault, styles.borderLeftnone]}
              placeholder="Mobile No"
              placeholderTextColor="#222B2E"
              onChangeText={(mobile) => setmobile(mobile)}
            />
          </View>
        </View>

        <View style={[styles.mb20]}>
          <Text style={[styles.textDefault, styles.font13, styles.mb9]}>Assigned Warehouse</Text>
          <TextInput
            style={[styles.inputStyle, styles.borderRadius0, styles.borderDefault]}
            placeholder="akule1"
            placeholderTextColor="#222B2E"
            onChangeText={(id) => setId(id)}
          />
        </View>

        <View style={[styles.mb20]}>
          <Text style={[styles.textDefault, styles.font13, styles.mb9]}>Designation</Text>
          <TextInput
            style={[styles.inputStyle, styles.borderRadius0, styles.borderDefault]}
            placeholder="General Manager"
            placeholderTextColor="#222B2E"
            onChangeText={(designation) => setdesignation(designation)}
          />
        </View>

        <View style={[styles.mb30]}>
          <Text style={[styles.textDefault, styles.font13, styles.mb9]}>Get Notified When</Text>
          <TextInput
            style={[styles.inputStyle, styles.borderRadius0, styles.borderDefault]}
            placeholder="All"
            placeholderTextColor="#222B2E"
            onChangeText={(designation) => setNotified(designation)}
          />
        </View>

        <Text style={[styles.font14, styles.textBlack, styles.mb16, styles.fontBold]}>My Address</Text>
        <View style={[styles.homeContainerBlk, styles.flexColumn, styles.alignStart, styles.mb12]}>
          <TouchableOpacity style={[styles.addHomeView, styles.mb12]}>
            <Text style={[styles.font13, styles.textPri]}>Home</Text>
          </TouchableOpacity>
          <Text style={[styles.font14, styles.textBlack]}>Ahmed Al Wasl PO Box </Text>
          <Text style={[styles.font14, styles.textBlack]}>12345 Dubai UAE </Text>
        </View>

        <View style={[styles.homeContainerBlk, styles.flexColumn, styles.alignStart, styles.mb12]}>
          <TouchableOpacity style={[styles.addHomeView, styles.mb12]}>
            <Text style={[styles.font13, styles.textPri]}>Office Address</Text>
          </TouchableOpacity>
          <Text style={[styles.font14, styles.textBlack]}>Mr Ahmed Al Wasl, Manager AAW General Trading </Text>
          <Text style={[styles.font14, styles.textBlack]}>PO Box 12345 Dubai UAE</Text>
        </View>
      </View>

    </ScrollView>
  );
};
