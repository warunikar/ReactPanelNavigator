import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import localStrings from "../resources/localStrings";

class AddNewUserPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: ""
		};
	}

	onAddNewUser = () => {
		const { navigation } = this.props;
		const { firstName, lastName } = this.state;
		const onAddNewUserCallback = navigation.getParam('onAddNewUser');
		onAddNewUserCallback(firstName + " " + lastName);
		navigation.navigate('LinkUser');
	}

    render() {

        return (
            <View style={{
	             display: "flex",
	             alignItems: 'center',
	             paddingTop: 100
	        }}>
                <Text
                    style={{paddingBottom: 20, fontSize: 20}}
                >
                    {localStrings.addNewUserTitle}
                </Text>
                <Text style={{paddingTop: 50, fontSize: 14}}>
                  First Name:
                </Text>
                <TextInput
					style={{height: 40, width: 60}}
					placeholder="Jane"
					onChangeText={(text) => this.setState({
						firstName: text
					})}
                />
                <Text style={{paddingTop: 20, fontSize: 14}}>
                  Last Name:
                </Text>
                <TextInput
					style={{height: 40, width: 60}}
					placeholder="Joe"
					onChangeText={(text) => this.setState({
						lastName: text
					})}
                />
                <View style={{paddingTop: 50}}>
	                <Button
	                    title={localStrings.addUserButtonTitle}
	                    onPress={() => this.onAddNewUser()}
	                />
	                <Button
	                    title={localStrings.homePageLinkTitle}
	                    onPress={() => this.props.navigation.navigate('Home')}
	                />
                </View>
              </View>
        );
    }
}

export default AddNewUserPage;