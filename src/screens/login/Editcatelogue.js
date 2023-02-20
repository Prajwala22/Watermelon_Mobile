import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { useForm, Controller } from "react-hook-form";

import {
    Alert,
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Pressable,
    Dimensions
} from 'react-native';
import api from '../../screens/Services/API/CallingApi';
import { endPoint } from '../../screens/Services/API/ApiConstants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalSelector from 'react-native-modal-selector'
import SvgUri from 'react-native-svg-uri-updated';
import { Button } from 'react-native-paper';

import styles from '../../../assets/css/styles';
export default function Editcatelogue({ navigation }: { navigation: any }) {
    const { control, handleSubmit: handleSubmit1, formState: formState1} = useForm();
    const { control: control2, handleSubmit: handleSubmit2, formState: formState2 } = useForm();
    const { control: control3, handleSubmit: handleSubmit3, formState: formState3 } = useForm();

    const [isstepone, setisstepone] = useState(true);
    const [issteptwo, setissteptwo] = useState(false);
    const [isstepthree, setisstepthree] = useState(false);
    
    const [codeError, setCodeError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [brandError, setBrandError] = useState(false);
    const [country, setcountry] = useState('');
    const [quantity, setquantity] = useState('');
    const [shelllife, setshelllife] = useState('');
    const [SKUS, setSKUS] = useState('');
    const [SKUSkey, setSKUSkey] = useState("Select");
    const [certificationkey, setcertificationkey] = useState(0);
    const [marketplacekey, setmarketplacekey] = useState(0);
    const [leadtimekey, setleadtimekey] = useState(0);
    const [certification, setcertification] = useState('');
    const [marketplace, setmarketplace] = useState('');
const[leadtime,setleadtime]=useState("")
    const [baseUnit, setbaseUnit] = useState('');
    const [shelllifekey, setshelllifekey] = useState(0);
    const [baseunitkey, setbaseunitkey] = useState(0);
    const [countrykey, setcountrykey] = useState("Select");
    const [Categorykey, setCategorykey] = useState("Select");
    const [subCategorykey, setsubCategorykey] = useState("Select");
    const [hashtagkey, sethashtagkey] = useState(0);
    const [statuskey, setstatuskey] = useState("Active");
const[Countrydata,setCountrydata]=useState([])

    
    const [key, setkey] = useState(0);
    const [email, setEmail] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [brand, setBrand] = useState('');
    const [code, setCode] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setsubCategory] = useState('');
    const [description1, setdescription1] = useState('');
    const [description2, setdescription2] = useState('');
    const [Userdata, setUserdata] = useState('');
    const [Categorydata, setCategorydata] = useState([]);
const[SubCategoryData,setSubCategoryData]= useState([]);

const[SKUSdata,setSKUSdata]= useState([]);
const[hashtagdata,sethashtagdata]= useState([]);

const[UOMdata,setUOMdata]= useState([])
    const [productCode, setproductCode] = React.useState("");
    const [ProductName, setProductName] = React.useState(" ");
    const [supplierProCode, onChangesupplierProCode] = React.useState("");
    const [shortDes, onChangeShortDes] = React.useState("");
    const [longDes, onChangelongDes] = React.useState("");
   
    const onSubmit1 = async (data) => {
        console.log('Submit form 1:', data);
      
              setisstepone(false)
              setisstepone(!isstepone)
              setissteptwo(!issteptwo)
       
    };
    const onSubmit2 = async (data) => {
        console.log('Submit form 2:', data);
       
              setissteptwo(false)
              setissteptwo(!issteptwo)
              setisstepthree(!isstepthree)
       
    };
    const onSubmit3 = async (data) => {
        console.log('Submit form 3:', data);
      
              setisstepthree(false)
              setisstepthree(!isstepthree)
             
       
    };
    useEffect(() => {
        getCategory()  ,
        getSubCategory(),
        gethashtagData(),
        getSKUSData(),
        getCountryOfOriginData(),
        getUOMData(),
        getProducts()
    }, []);
    const getProducts = async () => {
        const jsonValue = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "id": ""
        }
        const result = await api.getProduct(token, endPoint.get_products, myJson);
        console.log(result.data,"12387878")

        if (result) {
            
        
            setCategorydata(result.data)
        } else {
            setCategorydata([])
        }
    };
    const getCategory = async () => {
        const jsonValue = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "user_type_id" : ""
        }
        const result = await api.getAllCategory(token, endPoint.get_Category, myJson);
        console.log(result.data,"67676778787878")

        if (result) {
            
        
            setCategorydata(result.data)
        } else {
            setCategorydata([])
        }
    };
    const getSubCategory = async () => {
        const jsonValue: any = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "user_type_id" : ""
        }
        const result = await api.getAllSubCategory(token, endPoint.get_SubCategory, myJson);
        console.log(result.data,"78767656556")

        if (result) {
            
        
            setSubCategoryData(result.data)
        } else {
            setSubCategoryData([])
        }
    };
    const gethashtagData = async () => {
        const jsonValue = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "user_type_id" : ""
        }
        const result = await api.gethashtag(token, endPoint.get_hashtag, myJson);
        console.log(result.data,"67676778787878")

        if (result) {
            
        
            sethashtagdata(result.data)
        } else {
            sethashtagdata([])
        }
    };
     const getCountryOfOriginData = async () => {
        const jsonValue = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "name":"country,city"
        }
        const result = await api.getCountry(token, endPoint.get_country, myJson);
        console.log(result.data,"9908978")

        if (result) {
            
        
            setCountrydata(result.data)
        } else {
            setCountrydata([])
        }
    };
    const getUOMData = async () => {
        const jsonValue = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "fetch":"1000",
             "status":"-1",
             "page":"1"
        
        }
        const result = await api.getUOM(token, endPoint.get_uom, myJson);
        console.log(result.data,"RTYU")

        if (result) {
            
        
            setUOMdata(result.data.uoms)
        } else {
            setUOMdata([])
        }
    };
    const getSKUSData = async () => {
        const jsonValue = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "fetch":"10",
            "status":"-1",
            "page":"1"
       
        }
        const result = await api.getSKUS(token, endPoint.get_skus, myJson);
        console.log(result.data,"Prajju")

        if (result) {
            
        
            setSKUSdata(result.data.skus)
        } else {
            setSKUSdata([])
        }
    };
     //SKU
     const SKUSDataArray = SKUSdata.map((SKUS: any, index: number) => {
        let newData = {
         
          key: index + 1,
          label:SKUS.name,
          value:SKUS._id
        }
        return newData;
      })
    
    
     
    const onSubmit = async () => {
        const jsonValue = await AsyncStorage.getItem('UserToken')
        let token = jsonValue;
        var myJson = {
            "product_code": code,
            "product_name": ProductName,
            "company":name,
            "brand": brand,
            "tags":hashtagkey,
            "supplier_product_code": productCode,
            "category_id": Categorykey,
            "subcategory_id": subCategorykey,
            "in_stock": "",
            "base_uom": baseunitkey,
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
            "country_of_origin": countrykey,
            "hashtag": "",
            "certification": [],
            "in_marketplace": 0,
            "user_type": "2",
            "user_type_id": "5fe9c03ab70cb405ba5dcb33",
            "status": 0

        }
        const result = await api.createProduct(token, endPoint.create_Product, myJson);
        console.log(result, "09876543")

        if (result) {
            Alert.alert(result.message)
            setUserdata(false)
        } else {
            setUserdata(true)
        }
    };
 // category

    const categoryDataArray = Categorydata.map((category: any, index: number) => {
        let newData = {
          // key: project.projectId + '_' + index,
          key:  index + 1,
          label:category.category_name,
          value: category.category_id
        }
        return newData;
      })
//BaseUnitData

const BaseUnitDataArray = UOMdata.map((uom: any, index: number) => {
    let newData = {
      // key: project.projectId + '_' + index,
      key:  index + 1,
      label:uom.name,
      value: uom._id
    }
    return newData;
  })
    // sub category
    const subcategoryDataArray = SubCategoryData.map((subCategory: any, index: number) => {
        let newData = {
          // key: project.projectId + '_' + index,
          key: index + 1,
          label:subCategory.subcategory_name,
          value:subCategory.subcategory_id
        }
        return newData;
      })
      
      //Country
      const countryDataArray = Countrydata.map((country: any, index: number) => {
        let newData = {
          // key: project.projectId + '_' + index,
          key: index + 1,
          label:country.code,
          value:country._id
        }
        return newData;
      })

    // status
    const StatusData = [
        {key: 0 ,label:'Select'},
         { key: 1, label: 'Inactive' },
          { key: 2, label: 'Active' }
    ];

    // Hashtag
    const HashtagData = [
        { key: 1, label: 'Select' }
    ];

    
   
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView style={[styles.grayBg]}>
                {/* Header HTML */}
                <View style={[styles.dahboardHeader, styles.whiteBg, styles.catalogueHeader]}>
                    <View style={[styles.width100, styles.justifyBetween, styles.flexRow, styles.alignCenter]}>
                        <View style={[styles.flexRow, styles.alignCenter, styles.width20]}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <SvgUri source={require('../../../assets/images/dashboard/left_arrow.svg')} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.width60, styles.flexRow, styles.justifyCenter]}>
                            <Text style={[styles.textBlack, styles.font16, styles.fontSemi]}>Edit Catalogue</Text>
                        </View>
                        <View style={[styles.flexRow, styles.alignCenter, styles.width20, styles.justifyEnd]}>
                            <SvgUri source={require('../../../assets/images/dashboard/black_search_icon.svg')} />
                            <View>
                                <View style={[styles.notCount, styles.borderWhite]}></View>
                                <SvgUri source={require('../../../assets/images/dashboard/black_notification.svg')} style={[styles.marlft17]} />
                            </View>
                        </View>
                    </View>
                </View>
                {/* Header HTML - Ends */}

                <View style={[styles.pad20]}>
                    {/* Step one tab */}
                    {isstepone &&
                        <View style={[styles.width100]}>
                            {/* navigation tab */}
                            <View style={[styles.flexRow, styles.mb24]}>
                                <View style={[styles.width33, styles.pr4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.textPri, styles.mb16]}>Step 1</Text>
                                    <View style={[styles.width100, styles.tabBar, styles.primaryBg]}></View>
                                </View>
                                <View style={[styles.width33, styles.pr4, styles.pl4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.TabTextColor, styles.mb16]}>Step 2</Text>
                                    <View style={[styles.width100, styles.tabBar]}></View>
                                </View>
                                <View style={[styles.width33, styles.pl4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.TabTextColor, styles.mb16]}>Step 3</Text>
                                    <View style={[styles.width100, styles.tabBar]}></View>
                                </View>
                            </View>
                            {/* navigation tab - Ends */}

                            {/* upload Images */}
                            <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14]}>
                                <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Upload Images</Text>
                                <TouchableOpacity style={[styles.dragChooseFile, styles.flexColumn, styles.justifyCenter, styles.alignCenter]}>
                                    <SvgUri source={require('../../../assets/images/dashboard/choose_file.svg')} style={[styles.mb18]} />
                                    <Text style={[styles.font15, styles.textBlack, styles.mb2]}>Choose file here</Text>
                                    <Text style={[styles.font12, styles.textDefault]}>Tap here to upload your catalogue images</Text>
                                </TouchableOpacity>
                            </View>
                            {/* upload Images - Ends */}

                            {/* form */}
                            <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14, styles.flexRow, styles.flexWrap]}>
                                {/* System generated Product Code*  */}
                                <View style={[styles.mb20, styles.width100]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>System generated Product Code*</Text>
                                    <View>
                                        <Controller
                                            name="code"
                                            control={control}
                                            rules={{
                                                required: "System generated product code is required."
                                            }}

                                            render={(props) => (
                                                <TextInput
                                                    style={[styles.inputStyle, styles.fontMed]}
                                                    placeholderTextColor="#222B2E"
                                                    onChangeText={(code) => {
                                                        setCode(code);
                                                        props.field.onChange(code);
                                                    }}
                                                    value={code}
                                                />
                                            )}
                                        />
                                         {formState1.errors.code && (
              <Text style={[styles.errorMsg]}>
               Code is required.
              </Text>
            )}
                                    </View>
                                </View>
                                {/* System generated Product Code* - Ends */}
                                {/* Product Name*  */}
                                <View style={[styles.mb20, styles.width100]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Product Name*</Text>
                                    <Controller
                                        name="ProductName"
                                        control={control}
                                        rules={{ required: "Product name is required." }}

                                        render={(props) => (
                                            <TextInput
                                                style={[styles.inputStyle]}
                                                onChangeText={(ProductName) =>
                                                    {
                                                        props.field.onChange(ProductName);
                                                     setProductName(ProductName)}}
                                                value={ProductName}
                                            />
                                        )}
                                    />
                                       {formState1.errors.ProductName && (
              <Text style={[styles.errorMsg]}>
               ProductName is required.
              </Text>
            )}
                                </View>
                                {/* Product Name* - Ends */}
                                {/* Brand*  */}
                                <View style={[styles.mb20, styles.width100]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Brand*</Text>
                                    <Controller
                                        name="brand"
                                        control={control}
                                        rules={{ required: "Brand is required." }}

                                        render={(props) => (
                                            <TextInput
                                                style={[styles.inputStyle]}
                                                onChangeText={(brand) =>{
                                                    props.field.onChange(brand);
                                                 setBrand(brand)}}
                                                 value={brand}
                                            />
                                        )}
                                    />
                                      {formState1.errors.brand && (
              <Text style={[styles.errorMsg]}>
               Brand is required.
              </Text>
            )}
                                </View>
                                {/* Brand* - Ends */}
                                {/* Supplier Product Code*  */}
                                <View style={[styles.mb20, styles.width100]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Supplier Product Code*</Text>
                                    <Controller
                                        name="productCode"
                                        control={control}
                                        rules={{ required: "Supplier product code is required." }}

                                        render={(props) => (
                                            <TextInput
                                                style={[styles.inputStyle]}
                                                onChangeText={(productCode) =>
                                                    { 
                                                        props.field.onChange(productCode);
                                                        setproductCode(productCode)}}
                                                        value={productCode}
                                            />
                                        )}
                                    />
                                     {formState1.errors.productCode && (
              <Text style={[styles.errorMsg]}>
               ProductCode is required.
              </Text>
            )}
                                </View>
                                {/* Supplier Product Code* - Ends */}
                                {/* Category*  */}
                                <View style={[styles.mb20, styles.width50, styles.padR7]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Category*</Text>
                                    <View>
                                        <SvgUri source={require('../../../assets/images/dashboard/dropdown.svg')} style={[styles.modalDropDown]} />
                                        
                                        <Controller
                                        name="category"
                                        control={control}
                                        rules={{ required: "Category is required." }}

                                        render={(props) => (
                                        <ModalSelector
                                            data={categoryDataArray}
                                            initValue={Categorykey}
                                            selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                            initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                            overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                            optionContainerStyle={[styles.width300px]}
                                            cancelStyle={[styles.width300px, styles.marHorauto]}
                                            optionTextStyle={[styles.textBlack, styles.font15]}
                                            cancelTextStyle={[styles.textBlack, styles.font15]}
                                            onChange={(option) => {
                                                if (option.key) {
                                                    setCategory(option.label)
                                                    setCategorykey(option.label)
                                                  props.field.onChange(option.label);
                                                }
                                              }}
                                              value={Categorykey}

                                        />
                                        )}
                                        />
                                       
                     
                                    </View>
                                    {formState1.errors.category && (
                  <Text style={[styles.errorMsg]}>
                   Category is required.
                  </Text>
                )}
                                </View>
                              
                                {/* Category* - Ends */}
                                {/* Sub Category*  */}
                                <View style={[styles.mb20, styles.width50, styles.padL7]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Sub Category*</Text>
                                    <View>
                                        <SvgUri source={require('../../../assets/images/dashboard/dropdown.svg')} style={[styles.modalDropDown]} />
                                        <Controller
                                        name="subCategory"
                                        control={control}
                                        rules={{ required: "Sub Category is required." }}
                                        render={(props) => (
                                        <ModalSelector
                                            data={subcategoryDataArray}
                                            initValue={subCategorykey}

                                            selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                            initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                            overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                            optionContainerStyle={[styles.width300px]}
                                            cancelStyle={[styles.width300px, styles.marHorauto]}
                                            optionTextStyle={[styles.textBlack, styles.font15]}
                                            cancelTextStyle={[styles.textBlack, styles.font15]}
                                            onChange={(option) => {
                                                if (option.key) {
                                                    setsubCategory(option.label)
                                                    setsubCategorykey(option.label)
                                                  props.field.onChange(option.label);
                                                }
                                              }}
                                              value={subCategorykey}

                                        />
                                        )}
                                        />
                                    </View>
                                    {formState1.errors.subCategory && (
                  <Text style={[styles.errorMsg]}>
                  Sub category is required.
                  </Text>
                )}
                                </View>
                               
                                {/* Sub Category* - Ends */}
                                {/* Status*  */}
                                <View style={[styles.width50, styles.padR7]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Status*</Text>
                                    <View>
                                        <SvgUri source={require('../../../assets/images/dashboard/dropdown.svg')} style={[styles.modalDropDown]} />
                                        <Controller
                                        name="status"
                                        control={control}
                                        rules={{ required: "Status is required." }}

                                        render={(props) => (
                                        <ModalSelector
                                            data={StatusData}
                                            initValue={statuskey}
                                            selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                            initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                            overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                            optionContainerStyle={[styles.width300px]}
                                            cancelStyle={[styles.width300px, styles.marHorauto]}
                                            optionTextStyle={[styles.textBlack, styles.font15]}
                                            cancelTextStyle={[styles.textBlack, styles.font15]}
                                            onChange={(option) => {
                                                if (option.key) {
                                                    setStatus(option.label)
                                                    setstatuskey(option.label)
                                                  props.field.onChange(option.label);
                                                }
                                              }}
                                              value={statuskey}

                                        />
                                        )}
                                        />
                                    </View>
                                    {formState1.errors.status && (
                  <Text style={[styles.errorMsg]}>
                  Status is required.
                  </Text>
                )}
                                </View>
                               
                                {/* Status* - Ends */}
                                {/* Hashtag*  */}
                                <View style={[styles.width50, styles.padL7]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Hashtag*</Text>
                                    <View>
                                        <SvgUri source={require('../../../assets/images/dashboard/dropdown.svg')} style={[styles.modalDropDown]} />
                                        <Controller
                                        name="hashtag"
                                        control={control}
                                        rules={{ required: "Hashtag is required." }}

                                        render={(props) => (
                                        <ModalSelector
                                            data={HashtagData}
                                            initValue="Select"
                                            selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                            initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                            overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                            optionContainerStyle={[styles.width300px]}
                                            cancelStyle={[styles.width300px, styles.marHorauto]}
                                            optionTextStyle={[styles.textBlack, styles.font15]}
                                            cancelTextStyle={[styles.textBlack, styles.font15]}
                                            onChange={(option) => {
                                                if (option.key) {
                                                    setHashtag(option.key)
                                                    sethashtagkey(option.key)
                                                  props.field.onChange(option.key);
                                                }
                                              }}
                                              value={hashtagkey}

                                       />
                                       )}
                                       />
                                    </View>
                                    {formState1.errors.hashtag && (
                  <Text style={[styles.errorMsg]}>
                  Hashtag is required.
                  </Text>
                )}
                                </View>
                               
                                {/* Hashtag* - Ends */}

                            </View>
                            {/* form - Ends */}

                            {/* Description form */}
                            <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14]}>
                                {/* Short Description* */}
                                <View style={[styles.mb20]}>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Short Description*</Text>
                                    <Controller
                                        name="description1"
                                        control={control}
                                        rules={{ required: "Short description is required." }}

                                        render={(props) => (
                                            <TextInput
                                                style={[styles.inputStyle, styles.textArae]}
                                                textAlignVertical="top"
                                                multiline={true}
                                                onChangeText={(description1) => {
                                                    props.field.onChange(description1);

                                                    setdescription1(description1)}}
                                               
                                                placeholder={"Enter Description"}
                                                value={description1}

                                            />
                                        )}
                                    />
                                       {formState1.errors.description1 && (
              <Text style={[styles.errorMsg]}>
               Short description is required.
              </Text>
            )}
                                </View>
                                {/* Short Description* - Ends */}
                                {/* Long Description* */}
                                <View>
                                    <Text style={[styles.labelText, styles.font12, styles.fontMed, styles.mb4]}>Long Description*</Text>
                                    <Controller
                                        name="description2"
                                        control={control}
                                        rules={{ required: "Long description is required." }}

                                        render={(props) => (
                                            <TextInput
                                                style={[styles.inputStyle, styles.textArae]}
                                                textAlignVertical="top"
                                                multiline={true}
                                                onChangeText={(description2) => {
                                                    props.field.onChange(description2);
                                                    setdescription2(description2)}}
                                               
                                                placeholder={"Enter Description"}
                                                value={description2}

                                            />
                                        )}
                                    />
                                     {formState1.errors.description2 && (
              <Text style={[styles.errorMsg]}>
               Long description is required.
              </Text>
            )}
                                </View>
                                {/* Long Description* - Ends */}
                            </View>
                            {/* Description form - Ends */}
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <SvgUri source={require('../../../assets/images/dashboard/left_arrow.svg')} />
                            </TouchableOpacity>
                          
                             <TouchableOpacity onPress={handleSubmit1(onSubmit1)} >
                                <View style={[styles.saveButtonFooter, styles.whiteBg]}>
                                <Button style={[styles.primaryBg, styles.saveBtn, styles.width100]}><Text style={[styles.font15, styles.letterSpa33, styles.textWhite, styles.fontMed]}>Save & Continue</Text></Button>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                    {/* Step one tab - Ends */}

                    {/* Step Two tab */}
                    {issteptwo &&
                        <View style={[styles.width100]}>
                            {/* navigation tab */}
                            <View style={[styles.flexRow, styles.mb24]}>
                                <View style={[styles.width33, styles.pr4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.textBlack, styles.mb16]}>Step 1</Text>
                                    <View style={[styles.width100, styles.tabBar, styles.primaryBg]}></View>
                                </View>
                                <View style={[styles.width33, styles.pr4, styles.pl4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.textPri, styles.mb16]}>Step 2</Text>
                                    <View style={[styles.width100, styles.tabBar, styles.primaryBg]}></View>
                                </View>
                                <View style={[styles.width33, styles.pl4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.TabTextColor, styles.mb16]}>Step 3</Text>
                                    <View style={[styles.width100, styles.tabBar]}></View>
                                </View>
                            </View>
                            {/* navigation tab - Ends */}

                            {/* BASE UNIT */}
                            <View style={[styles.whiteBg, styles.collapseCard, styles.borderActive]} >
                                <View style={[styles.flexRow, styles.alignCenter, styles.justifyBetween]}>
                                    <Text style={[styles.font12, styles.fontBold, styles.textBlack]}>BASE UNIT</Text>

                                </View>
                                
 <View>
 <SvgUri style={[styles.rotateImg]} source={require('../../../assets/images/dashboard/collapse_dropdown.svg')} />

                  <Controller
                    name="baseUnit"
                    control={control2}
                       rules={{ required: "Base unit is required." }}
                    render={(props) => (
                      <ModalSelector
                        data={BaseUnitDataArray}
                        
                        selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                                initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                                overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                                optionContainerStyle={[styles.width300px]}
                                                cancelStyle={[styles.width300px, styles.marHorauto]}
                                                optionTextStyle={[styles.textBlack, styles.font15]}
                                                cancelTextStyle={[styles.textBlack, styles.font15]}
                        initValue="Select"
                        selectedKey={baseunitkey}
                        onChange={(option) => {
                          if (option.key) {
                           setbaseUnit(option.key)
                           console.log(baseunitkey)
                           setbaseunitkey(option.key)
                            props.field.onChange(option.key);
                          }
                        }}
                        value={baseunitkey}

                      />
                    )}
                  />
                </View>
               
                            </View>
                            {formState2.errors.baseUnit && (
              <Text style={[styles.errorMsg]}>
               Base unit is required.
              </Text>
            )}
                           
                            {/* BASE UNIT - ends */}

                            {/* SHELL LIFE */}
                            <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14]}>
                            <Text  style={[styles.font12, styles.fontBold, styles.textBlack]}>Shell Life</Text>

                                {/* Short Description* */}
                                <View style={[styles.mb20]}>
                                    
                                    <Controller
                                        name="shelllife"
                                        control={control2}
                                        rules={{ required: "Shell life is required." }}

                                        render={(props) => (
                                    // <ModalSelector
                                    //             data={ShelllifeData}
                                    //             initValue="Select"
                                    //             selectedKey={shelllifekey}


                                    //             selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                    //             initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                    //             overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                    //             optionContainerStyle={[styles.width300px]}
                                    //             cancelStyle={[styles.width300px, styles.marHorauto]}
                                    //             optionTextStyle={[styles.textBlack, styles.font15]}
                                    //             cancelTextStyle={[styles.textBlack, styles.font15]}
                                    //             onChange={(option) => {
                                    //                 if (option.key) {
                                    //                  setshelllife(option.key)
                                    //                  setshelllifekey(option.key)
                                    //                   props.field.onChange(option.key);
                                    //                 }
                                    //               }}
                                    //               value={shelllifekey}

                                    //         />
                                     <TextInput
                                                style={[styles.inputStyle, styles.textArae]}
                                                textAlignVertical="top"
                                                multiline={true}
                                                onChangeText={(shelllife) => {
                                                    props.field.onChange(shelllife);
                                                    setshelllife(shelllife)}}
                                               
                                                
                                                value={shelllife}

                                            />
                                            )}
                                            />
                                             
                                </View>
                                 {formState2.errors.shelllife && (
                  <Text style={[styles.errorMsg]}>
                  Shell life is required.
                  </Text>
                )}
                          
                           
                  </View>
                  
                            {/* SHELL LIFE - ends */}

                            {/* CRITICAL QUANTITY */}
                            <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14]}>
                                    <Text style={[styles.font12, styles.fontBold, styles.textBlack]}>CRITICAL QUANTITY</Text>
                                    <View style={[styles.mb20]}>
                                    <Controller
                                        name="quantity"
                                        control={control2}
                                        rules={{ required: "Critical quantity is required." }}

                                        render={(props) => (
                                    // <ModalSelector
                                    //             data={CriticalquantityData}
                                    //             initValue="Select"
                                    //             // onChangeText={(quantity) => setquantity(quantity)}

                                    //             selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                    //             initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                    //             overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                    //             optionContainerStyle={[styles.width300px]}
                                    //             cancelStyle={[styles.width300px, styles.marHorauto]}
                                    //             optionTextStyle={[styles.textBlack, styles.font15]}
                                    //             cancelTextStyle={[styles.textBlack, styles.font15]}
                                    //             onChange={(option) => {
                                    //                 if (option.key) {
                                    //                     setquantity(option.key)
                                    //                  setkey(option.key)
                                    //                   props.field.onChange(option.key);
                                    //                 }
                                    //               }}
                                    //               value={key}

                                    //         />
                                    <TextInput
                                                style={[styles.inputStyle, styles.textArae]}
                                                textAlignVertical="top"
                                                multiline={true}
                                                onChangeText={(quantity) => {
                                                    props.field.onChange(quantity);
                                                    setquantity(quantity)}}
                                               
                                                
                                                value={quantity}

                                            />
                                            )}
                                            />
                                              
                                </View>
                                 {formState2.errors.quantity && (
                  <Text style={[styles.errorMsg]}>
                  Critical quantity is required.
                  </Text>
                )}
                            </View> 
                           
                            {/* CRITICAL QUANTITY - ends */}

                            {/* COUNTRY OF ORIGIN */}
                            <View style={[styles.whiteBg, styles.collapseCard]} >
                                <View style={[styles.flexRow, styles.alignCenter, styles.justifyBetween]}>
                                    <Text style={[styles.font12, styles.fontBold, styles.textBlack]}>COUNTRY OF ORIGIN</Text>
                                    <SvgUri source={require('../../../assets/images/dashboard/collapse_dropdown.svg')} />
                                    <Controller
                                        name="country"
                                        control={control2}
                                        rules={{ required: "Country of origin is required." }}

                                        render={(props) => (
                                    <ModalSelector
                                                data={countryDataArray}
                                                initValue={countrykey}
                                                // onChangeText={(country) => setcountry(country)}

                                                selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                                initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                                overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                                optionContainerStyle={[styles.width300px]}
                                                cancelStyle={[styles.width300px, styles.marHorauto]}
                                                optionTextStyle={[styles.textBlack, styles.font15]}
                                                cancelTextStyle={[styles.textBlack, styles.font15]}
                                                onChange={(option) => {
                                                    if (option.key) {
                                                        setcountry(option.label)
                                                        setcountrykey(option.label)
                                                      props.field.onChange(option.key);
                                                    }
                                                  }}
                                                  value={countrykey}
                                            />
                                            )}
                                            />
                                             
                                </View>
                               
                            </View> 
                            {formState2.errors.country && (
                  <Text style={[styles.errorMsg]}>
                 Country of origin is required.
                  </Text>
                )}
                            {/* COUNTRY OF ORIGIN - ends */}
                            <Text style={[styles.font12, styles.textDefault]}>UOM = Unit of Measure I MOQ = Minimum Order Quantity Critical level alert = Lowest quantity available in inventory at which alert is triggered</Text>
                            <TouchableOpacity onPress={() => {setissteptwo(!issteptwo);setisstepone(!isstepone)}}>
                                <SvgUri source={require('../../../assets/images/dashboard/left_arrow.svg')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubmit2(onSubmit2)} >
                                <View style={[styles.saveButtonFooter, styles.whiteBg]}>
                                <Button style={[styles.primaryBg, styles.saveBtn, styles.width100]}><Text style={[styles.font15, styles.letterSpa33, styles.textWhite, styles.fontMed]}>Save & Continue</Text></Button>
                                </View>
                            </TouchableOpacity>
                        </View>

                    }
                    {/* Step Two tab - Ends */}

                    {/* Step Three tab */}
                    {isstepthree &&
                        <View style={[styles.width100]}>
                            {/* navigation tab */}
                            <View style={[styles.flexRow, styles.mb24]}>
                                <View style={[styles.width33, styles.pr4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.textBlack, styles.mb16]}>Step 1</Text>
                                    <View style={[styles.width100, styles.tabBar, styles.primaryBg]}></View>
                                </View>
                                <View style={[styles.width33, styles.pr4, styles.pl4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.textBlack, styles.mb16]}>Step 2</Text>
                                    <View style={[styles.width100, styles.tabBar, styles.primaryBg]}></View>
                                </View>
                                <View style={[styles.width33, styles.pl4, styles.flexColumn, styles.alignCenter, styles.justifyCenter]}>
                                    <Text style={[styles.font12, styles.fontSemi, styles.textPri, styles.mb16]}>Step 3</Text>
                                    <View style={[styles.width100, styles.tabBar, styles.primaryBg]}></View>
                                </View>
                            </View>
                            {/* navigation tab - Ends */}

                            {/* ORDERING OPTIONS(SKUS) */}
                            <View style={[styles.whiteBg, styles.collapseCard]} >
                                <View style={[styles.flexRow, styles.alignCenter, styles.justifyBetween]}>
                                    <Text style={[styles.font12, styles.fontBold, styles.textBlack]}>ORDERING OPTIONS(SKUS)</Text>
                                    <SvgUri source={require('../../../assets/images/dashboard/collapse_dropdown.svg')} />
                                    <Controller
                                        name="SKUS"
                                        control={control3}
                                        rules={{ required: "Country of origin is required." }}

                                        render={(props) => (
                                    <ModalSelector
                                                data={SKUSDataArray}
                                                initValue={SKUSkey}
                                                // onChangeText={(country) => setcountry(country)}

                                                selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                                initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                                overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                                optionContainerStyle={[styles.width300px]}
                                                cancelStyle={[styles.width300px, styles.marHorauto]}
                                                optionTextStyle={[styles.textBlack, styles.font15]}
                                                cancelTextStyle={[styles.textBlack, styles.font15]}
                                                onChange={(option) => {
                                                    if (option.key) {
                                                        setSKUS(option.key)
                                                        setSKUSkey(option.label)
                                                      props.field.onChange(option.label);
                                                    }
                                                  }}
                                                  value={SKUSkey}
                                            />
                                            )}
                                            />
                                </View>
                               
                            </View>
                            {formState3.errors.SKUS && (
                  <Text style={[styles.errorMsg]}>
                 Ordering options is required.
                  </Text>
                )}
                            {/* ORDERING OPTIONS(SKUS) - ends */}

                            {/* CERTIFICATION */}
                            {/* <View style={[styles.whiteBg, styles.collapseCard]} >
                                <View style={[styles.flexRow, styles.alignCenter, styles.justifyBetween]}>
                                    <Text style={[styles.font12, styles.fontBold, styles.textBlack]}>CERTIFICATION</Text>
                                    <SvgUri source={require('../../../assets/images/dashboard/collapse_dropdown.svg')} />
                                    <Controller
                                        name="certification"
                                        control={control3}
                                        rules={{ required: "Certification is required." }}

                                        render={(props) => (
                                    <ModalSelector
                                                data={CertificationData}
                                                initValue="Select"
                                                // onChangeText={(country) => setcountry(country)}

                                                selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                                initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                                overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                                optionContainerStyle={[styles.width300px]}
                                                cancelStyle={[styles.width300px, styles.marHorauto]}
                                                optionTextStyle={[styles.textBlack, styles.font15]}
                                                cancelTextStyle={[styles.textBlack, styles.font15]}
                                                onChange={(option) => {
                                                    if (option.key) {
                                                        setcertificationkey(option.key)
                                                        setcertification(option.key)
                                                      props.field.onChange(option.key);
                                                    }
                                                  }}
                                                  value={certificationkey}
                                            />
                                            )}
                                            />
                                </View>
                            </View> */}
                             <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14]}>
                            <Text  style={[styles.font12, styles.fontBold, styles.textBlack]}>CERTIFICATION</Text>

                              
                                <View style={[styles.mb20]}>
                                    
                                <Controller
                                        name="certification"
                                        control={control3}
                                        rules={{ required: "Certification is required." }}

                                        render={(props) => (
                                   
                                     <TextInput
                                                style={[styles.inputStyle, styles.textArae]}
                                                textAlignVertical="top"
                                                multiline={true}
                                                onChangeText={(certification) => {
                                                    props.field.onChange(certification);
                                                    setcertification(certification)}}
                                               
                                                
                                                value={ certification}

                                            />
                                            )}
                                            />
                                             
                                </View>
                                
                                {formState3.errors.certification && (
                  <Text style={[styles.errorMsg]}>
                 Certification is required.
                  </Text>
                )}
                           
                  </View>
                            
                            {/* CERTIFICATION - ends */}

                            {/* MARKET PLACE SETTINGS */}
                            <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14]}>
                            <Text  style={[styles.font12, styles.fontBold, styles.textBlack]}>MARKET PLACE SETTINGS</Text>

                              
                                <View style={[styles.mb20]}>
                                    
                                    <Controller
                                        name="marketplace"
                                        control={control3}
                                        rules={{ required: "Market place is required." }}

                                        render={(props) => (
                                    // <ModalSelector
                                    //             data={MarketPlaceData}
                                    //             initValue="Select"
                                    //             // onChangeText={(country) => setcountry(country)}

                                    //             selectStyle={[styles.inputStyle, styles.flexRow, styles.alignCenter, styles.justifyStart]}
                                    //             initValueTextStyle={[styles.font15, styles.textBlack, styles.fontMed]}
                                    //             overlayStyle={[styles.popupOverlay, styles.flexColumn, styles.justifyEnd, styles.alignCenter]}
                                    //             optionContainerStyle={[styles.width300px]}
                                    //             cancelStyle={[styles.width300px, styles.marHorauto]}
                                    //             optionTextStyle={[styles.textBlack, styles.font15]}
                                    //             cancelTextStyle={[styles.textBlack, styles.font15]}
                                    //             onChange={(option) => {
                                    //                 if (option.key) {
                                    //                     setmarketplacekey(option.key)
                                    //                     setmarketplace(option.key)
                                    //                   props.field.onChange(option.key);
                                    //                 }
                                    //               }}
                                    //               value={marketplacekey}

                                    //         />
                                    <TextInput
                                    style={[styles.inputStyle, styles.textArae]}
                                    textAlignVertical="top"
                                    multiline={true}
                                    onChangeText={(marketplace) => {
                                        props.field.onChange(marketplace);
                                        setmarketplace(marketplace)}}
                                   
                                    
                                    value={ marketplace}

                                />
                                            )}
                                            />
                                </View>
                            </View>
                            {formState3.errors.marketplace && (
                  <Text style={[styles.errorMsg]}>
                 Market place is required.
                  </Text>
                )}
                            {/* MARKET PLACE SETTINGS - ends */}

                            {/* LEAD TIME */}
                            <View style={[styles.width100, styles.whiteBg, styles.pad16, styles.borderRadius4, styles.mb14]}>
                            <Text  style={[styles.font12, styles.fontBold, styles.textBlack]}>Lead time</Text>

                              
                                <View style={[styles.mb20]}>
                                    
                                    <Controller
                                        name="leadtime"
                                        control={control3}
                                        rules={{ required: "Lead time is required." }}

                                        render={(props) => (
                                    
                                    <TextInput
                                    style={[styles.inputStyle, styles.textArae]}
                                    textAlignVertical="top"
                                    multiline={true}
                                    onChangeText={(leadtime) => {
                                        props.field.onChange(leadtime);
                                        setleadtime(leadtime)}}
                                   
                                    
                                    value={ leadtime}

                                />
                                            )}
                                            />
                                </View>
                            </View>
                            {formState3.errors.leadtime && (
                  <Text style={[styles.errorMsg]}>
                Lead time is required.
                  </Text>
                )}
                            {/* LEAD TIME - ends */}

                            <View style={[styles.mb28]}>
                                <Text style={[styles.font12, styles.textBlack, styles.marBtm4]}>Catalogue for*</Text>
                                <View style={[styles.flexRow, styles.flexWrap]}>
                                    <TouchableOpacity style={[styles.catalogueForcheckbox, styles.mr10, styles.borderActive, styles.checkboxBG]}>
                                        <Text style={[styles.font13, styles.textPri, styles.fontMed]}>Promotion</Text>
                                        <SvgUri source={require('../../../assets/images/dashboard/checkbox_tick_icon.svg')} style={[styles.checkboxTick]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.catalogueForcheckbox, styles.mr10, styles.whiteBg]}>
                                        <Text style={[styles.font13, styles.textBlack, styles.fontMed]}>Offers by Supplier</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.catalogueForcheckbox, styles.mr10, styles.whiteBg]}>
                                        <Text style={[styles.font13, styles.textBlack, styles.fontMed]}>Hotlists</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={[styles.font12, styles.textDefault]}>UOM = Unit of Measure I MOQ = Minimum Order Quantity Critical level alert = Lowest quantity available in inventory at which alert is triggered</Text>
                            <TouchableOpacity onPress={() => {setisstepthree(!isstepthree);setissteptwo(!issteptwo)}}>
                                <SvgUri source={require('../../../assets/images/dashboard/left_arrow.svg')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubmit3(onSubmit)}  >
                                <View style={[styles.saveButtonFooter, styles.whiteBg]}>
                                <Button style={[styles.primaryBg, styles.saveBtn, styles.width100]}><Text style={[styles.font15, styles.letterSpa33, styles.textWhite, styles.fontMed]}>Submit</Text></Button>
                                </View>
                               
                            </TouchableOpacity>
                            
                        </View>
                        
                    }
                    {/* Step Three tab - Ends */}
                </View>


            </ScrollView>
          

        </SafeAreaView >
    )
};