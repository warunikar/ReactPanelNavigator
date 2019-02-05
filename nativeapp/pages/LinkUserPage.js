import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import localStrings from "../resources/localStrings";
import { container, title } from "../styles/PageStyles";

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

	onSelectUser = (userName) => {
		const { navigation } = this.props;
        const onSelectUserCallback = navigation.getParam('onSelectUser');
        onSelectUserCallback(userName);
        navigation.navigate('Home');
	}

    render() {
        return (
            <View style={container}>
                <Text
                    style={title}
                >
                    {localStrings.listOfUsers}
                </Text>
                <FlatList
                  data={this.prepareItems(this.state.usersList)}
                  renderItem={({item}) =>
                    <Text
                        onPress={() => this.onSelectUser(item.key)}
                        style={{paddingBottom: 5}}
                    >
                        {item.key}
                    </Text>
                  }
                />
                <View style={{paddingTop: 100}}>
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
            </View>
        );
    }
}

export default LinkUserPage;