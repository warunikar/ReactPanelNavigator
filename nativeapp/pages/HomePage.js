import React from 'react';
import { Button, View, Text } from 'react-native';
import localStrings from "../resources/localStrings";

class HomePage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{localStrings.homeTitle}</Text>
                <Button
                    title={localStrings.linkUser}
                    onPress={() => this.props.navigation.navigate('LinkUser')}
                />
            </View>
        );
    }
}

export default HomePage;