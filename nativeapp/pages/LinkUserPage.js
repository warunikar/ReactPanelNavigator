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

	prepareItems = (itemsList) => (
		itemsList.map((item) => ({key: item}))
	);

	onAddNewUser = (userName) => {
		const { usersList } = this.state;
		const newUsersList = [userName].concat(usersList);
		this.setState({
			usersList: newUsersList
		});
	}

    render() {
    console.log(this.prepareItems(this.state.usersList));
        return (
            <View style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Text>{localStrings.listOfUsers}</Text>
                <FlatList
                  data={this.prepareItems(this.state.usersList)}
                  renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <Button
                    title={localStrings.addNewUserTitle}
                    onPress={() => this.props.navigation.push('AddNewUser', {
                        onAddNewUser: this.onAddNewUser
                    })}
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