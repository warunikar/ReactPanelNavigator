import React from 'react';
import { Button, View, Text } from 'react-native';
import localStrings from "../resources/localStrings";

class AddNewUserPage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{localStrings.listOfUsers}</Text>
                <Button
                    title={localStrings.homePageLinkTitle}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default AddNewUserPage;