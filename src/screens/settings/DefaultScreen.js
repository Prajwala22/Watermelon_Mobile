
import React,{useState} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';

import { Form, FormItem, Picker, } from 'react-native-form-component';
import CheckBox from '../../components/form/CheckBox';

const DefaultScreen = () => {
    const [regNo, setRegNo] = useState('');
    const [country, setCountry] = useState('971');
    const [orderApproval, setOrderApproval] = useState(false);

    const [isSelected, setSelection] = useState(false);

    const handleSubmitPress = () => {
        console.log('handle press code goes here')
      }

  return (
    <ScrollView>
    <View style={GlobalStyles.defaultScreenContainer}>
        <Form onButtonPress={() => handleSubmitPress()} buttonText={'Submit'} buttonStyle={GlobalStyles.buttonStyle}>
        <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Registration No.</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View> 
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Registered Phone No</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View> 
     <View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Registered Email</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View>  
     <View>
     <View style={GlobalStyles.imageIcon}>
        <View style={GlobalStyles.defaultScreenCountryCodeSection}>
        <Text style={GlobalStyles.defaultScreenLabel}>Country Code*</Text>
          <View style={GlobalStyles.defaultScreenDropdownContainer}>
          <Picker
            items={[
              { label: 'UAE (+971)', value: '971' },
              { label: 'INDIA(+91)', value: '91' },
            ]}
            selectedValue={country}
            onSelection={(item) => setCountry(item.value)}
          />
          </View>
        </View> 
        <View style={GlobalStyles.defaultScreenMobileNoSection}>
        <View>
        <Text style={GlobalStyles.defaultScreenLabel}>Default Mobile No*</Text>
        <Picker
            items={[
              { label: 'UAE (+971)', value: '567971' },
              { label: 'INDIA(+91)', value: '788491' },
            ]}
            selectedValue={country}
            onSelection={(item) => setCountry(item.value)}
          />
        </View> 
        </View>
        </View>
    </View>
    <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Default Email*</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View>  
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Contact Name*</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View>  
     <View>
     <View style={GlobalStyles.imageIcon}>
        <View style={GlobalStyles.defaultScreenCountryCodeSection}>
        <Text style={GlobalStyles.defaultScreenLabel}>Country Code*</Text>
          <View style={GlobalStyles.defaultScreenDropdownContainer}>
          <Picker
            items={[
              { label: 'UAE (+971)', value: '971' },
              { label: 'INDIA(+91)', value: '91' },
            ]}
            selectedValue={country}
            onSelection={(item) => setCountry(item.value)}
          />
          </View>
        </View> 
        <View style={GlobalStyles.defaultScreenMobileNoSection}>
        <View>
        <Text style={GlobalStyles.defaultScreenLabel}>Contact No*</Text>
        <Picker
            items={[
              { label: 'UAE (+971)', value: '567971' },
              { label: 'INDIA(+91)', value: '431791' },
            ]}
            selectedValue={country}
            onSelection={(item) => setCountry(item.value)}
          />
        </View> 
        </View>
        </View>
    </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Alternate Email1</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Alternate Email2</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Credits*</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>PO Box</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Business Type</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Email</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Address</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Modified</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View>
     <View>
          <Text style={GlobalStyles.defaultScreenLabel}>Modified Date</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputContainer}
          />
     </View>
     <View style={GlobalStyles.flexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setOrderApproval(!orderApproval)}
                title="Order approval is not required for the BuyerMe"
                isChecked={orderApproval}
        />
      </View>
    </View>

     
      </View>
        </Form>
    </View>
    </ScrollView>
  );
};

export default DefaultScreen;