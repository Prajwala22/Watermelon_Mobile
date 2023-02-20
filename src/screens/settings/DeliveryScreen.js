
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Form, FormItem, Picker } from 'react-native-form-component';
import GlobalStyles from '../../../assets/css/styles';
import CheckBox from '../../components/form/CheckBox';
import ToggleSwitch from '../../components/form/ToggleSwitch';


const DeliveryScreen = () => {

  const [country, setCountry] = useState('971');
  const [regNo, setRegNo] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [rejectOrder, setRejectOrder] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [notDeliveryFee, setNotDeliveryFee] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState(false);
  const [selectAll, setSelectAll] = useState(false);


  return (
    <ScrollView>
      <View style={GlobalStyles.deliveryScreenContainer}>
    <Form onButtonPress={() => handleSubmitPress()} buttonText={'Submit'} buttonStyle={GlobalStyles.buttonStyle}>
     <View>
      <View style={GlobalStyles.imageIcon}>
        <View style={GlobalStyles.defaultScreenMobileNoSection}>
        <Text style={GlobalStyles.defaultScreenLabel}>Minimum Order</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
          
        </View>
        <View style={GlobalStyles.defaultScreenCountryCodeSection}>
          <View style={GlobalStyles.deliveryScreenSideDropdownContainer}>
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
      </View>
     </View>

     <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
        <CheckBox onPress={() => setRejectOrder(!rejectOrder)}
                title="Reject Orders if below minimum value"
                isChecked={rejectOrder}
        />
      </View>
    </View>
    <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setCancelOrder(!cancelOrder)}
                title="Do not allow buyers to cancel orders after cut off"
                isChecked={cancelOrder}
        />
      </View>
    </View>

    <Text style={GlobalStyles.deliveryFeeScreenLabel}>Delivery Fees</Text>
    <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setNotDeliveryFee(!notDeliveryFee)}
                title="Do not apply delivery fee"
                isChecked={notDeliveryFee}
        />
      </View>
    </View>
    <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setDeliveryFee(!deliveryFee)}
                title="Apply delivery fee"
                isChecked={deliveryFee}
        />
      </View>
    </View>

    <View>
          <Text style={GlobalStyles.deliveryAreaScreenLabel}>Delivery Area for marketplace</Text>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View> 
     <View>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View> 
     <View>
          <FormItem
            value={regNo}
            asterik
            isRequired
            style={GlobalStyles.defaultScreenInputWhiteContainer}
          />
     </View> 

     <Text style={GlobalStyles.defaultScreenLabel}>Cut Off Times</Text>
     <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setSelectAll(!selectAll)}
                title="Select All"
                isChecked={selectAll}
        />
      </View>
    </View>

    <View style={GlobalStyles.deliveryFlexSectionLabels}>
      <View><Text style={GlobalStyles.deliveryFlexLabel}>Cut off Day</Text></View>
      <View><Text style={GlobalStyles.deliveryFlexLabel}>Cut off Time</Text></View>
    </View>

    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Sunday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />

    </Form>
    </View>
    </ScrollView>
  );
};

export default DeliveryScreen;