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
import api from '../../screens/Services/API/CallingApi';
import {endPoint} from '../../screens/Services/API/ApiConstants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GlobalStyles from '../../../assets/css/styles';
export default function AddCatalogueScreen({ navigation }: { navigation: any }) {
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
    const [Userdata, setUserdata] = useState('');

    const onSubmit = async () => {
        const jsonValue:any = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "product_code": "",
            "product_name": "test",
            "company": "",
            "brand": "tets",
            "tags": "",
            "supplier_product_code": "3456567",
            "category_id": "602bf89cf6999f18cb3faf88",
            "subcategory_id": "602d1841a6fed7054a61f95b",
            "in_stock": "",
            "base_uom": "pot",
            "critical_level": "1",
            "ordering_option": [
                {
                    "orderunit": "Bunch",
                    "equalsto": ""
                }
            ],
            "pricing_range": [
                {
                    "default": true,
                    "priceunit": "pot",
                    "id": "pot",
                    "pricemoq": 1,
                    "ref": "",
                    "promo": "",
                    "sku_status": true,
                    "isuom": true
                },
               
            ],
            "shelf_life": "1",
            "shelf_daymonth": "Day",
            "lead_daymonth": "",
            "country_of_origin": "Barbados",
            "hashtag": "",
            "certification": [],
            "in_marketplace": 0,
            "user_type": "2",
            "user_type_id": "5fe9c03ab70cb405ba5dcb33",
            "status": 0

        }
        const result = await api.createProduct(token,endPoint.create_Product,myJson);
console.log(result,"67676778787878")

if(result){
   Alert.alert(result.message)
  setUserdata(false)
}else{
  setUserdata(true)
}
    };


    return (
        <ScrollView>
            <View style={GlobalStyles.signupContainer}>


                <View style={GlobalStyles.inputView}>
                    <Text style={GlobalStyles.labelText}>System generated product code*</Text>
                    <View style={GlobalStyles.inputContainer}>
                        <TextInput
                            style={GlobalStyles.signupTextInput}
                            placeholder=""
                            placeholderTextColor="#222B2E"
                            onChangeText={(code) => setCode(code)}

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
                            onChangeText={(brand) => setBrand(brand)}

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
                            onChangeText={(product_code) => setProduct_code(product_code)}

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
                            onChangeText={(category) => setCategory(category)}

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
                            onChangeText={(subCategory) => setsubCategory(subCategory)}

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
                            onChangeText={(status) => setStatus(status)}

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
                            onChangeText={(hashtag) => setHashtag(hashtag)}

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
                            onChangeText={(description1) => setDescription1(description1)}

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
                            onChangeText={(description2) => setDescription2(description2)}

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
                    <TouchableOpacity style={GlobalStyles.loginBtn} onPress={()=>onSubmit()}>
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