import { Pressable, StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FONTS} from '../../constant/Font';
import {COLORS} from '../../constant/Colors';
import { Switch } from 'react-native-switch';

const ToggleSwitch = (props) => {
	const iconName = props.isChecked ?
		"checkbox-marked" : "checkbox-blank-outline";
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        const [switchValue,setSwitchValue] = useState(false);

	return (
		<View style={styles.container}>
			<Pressable onPress={props.onPress}>
				<MaterialCommunityIcons
					name={iconName} size={24} color="#9CB8AE" style={{marginTop:5,marginRight:5}} />
			</Pressable>
            <View style={styles.boxSections}>
            <View style={styles.boxSection}>
              <Text style={styles.firstTitle}>{props.firstTitle}</Text>
            <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                disabled={false}
                activeText={'Yes'}
                inActiveText={'No'}
                backgroundActive={'#36B152'}
                backgroundInactive={'#D0D6DD'}
                circleActiveColor={'#FFFFFF'}
                circleInActiveColor={'#FFFFFF'}
                circleSize={25}
                switchLeftPx={5}
                switchRightPx={5} 
                switchWidthMultiplier={3} 
                switchBorderRadius={30}
                barHeight={30}
                circleBorderWidth={0}
            />
            </View>
			
            <View style={styles.boxSection}>
              <Text style={styles.secTitle}>{props.secTitle}</Text>
              <Icon
                name="clock"
                size={20}
                color={COLORS.blue}
                />
            </View>
            </View>
		</View>
	);
};

export default ToggleSwitch;

const styles = StyleSheet.create({
	container: {
        display:'flex',
		justifyContent:'flex-start',
		flexDirection: "row",
		width: '100%',
		marginTop: 6,
		marginHorizontal: 5,
        marginLeft:0,

	},
	title: {
		fontSize: 14,
		color: "#1F222F",
		marginLeft: 5,
        fontFamily: FONTS.Regular,
	},
    boxSections:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    boxSection:{
        backgroundColor:'#fff',
        padding:10,
        width:'45%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',

    },
});
