import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import localStrings from "../resources/localStrings";

class AddNewUserPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	}

	updateName = (text) => {
		this.setState({
			name: text
		});
	};

    render() {
        return (
            <View style={{display: "flex", padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{paddingTop: 20, fontSize: 14}}>
                  First Name:
                </Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Jane"
                  onChangeText={this.updateName}
                />
                <Text style={{paddingTop: 20, fontSize: 14}}>
                  Last Name:
                </Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Joe"
                  onChangeText={this.updateName}
                />
                <Button
                    title={localStrings.homePageLinkTitle}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
              </View>
        );
    }
}

export default AddNewUserPage;