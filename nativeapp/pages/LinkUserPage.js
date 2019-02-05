import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import localStrings from "../resources/localStrings";

class LinkUserPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usersList: [
				"Jake Peralta",
				"Terry Jeffords",
				"Amy Santiago",
				"Rosa Diaz"
			]
		};
	};

	prepItems = (itemsList) => (
		itemsList.map((item) => ({key: item}))
	);

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{localStrings.listOfUsers}</Text>
                <FlatList
                  data={this.prepItems(this.state.usersList)}
                  renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <Button
                    title={localStrings.addNewUserTitle}
                    onPress={() => this.props.navigation.push('AddNewUser')}
                />
                <Button
                    title={localStrings.homePageLinkTitle}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default LinkUserPage;