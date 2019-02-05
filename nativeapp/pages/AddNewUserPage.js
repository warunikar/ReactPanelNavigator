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
		this.props.navigation.navigate('LinkUser');
	}

    render() {

        return (
            <View style={{display: "flex", padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{paddingTop: 20, fontSize: 14}}>
                  First Name:
                </Text>
                <TextInput
					style={{height: 40}}
					placeholder="Jane"
					onChangeText={(text) => this.setState({
						firstName: text
					})}
                />
                <Text style={{paddingTop: 20, fontSize: 14}}>
                  Last Name:
                </Text>
                <TextInput
					style={{height: 40}}
					placeholder="Joe"
					onChangeText={(text) => this.setState({
						lastName: text
					})}
                />
                <Button
                    title={localStrings.homePageLinkTitle}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title={localStrings.addUserButtonTitle}
                    onPress={() => this.onAddNewUser()}
                />
              </View>
        );
    }
}

export default AddNewUserPage;