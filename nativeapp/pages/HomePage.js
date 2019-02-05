import React from 'react';
import { Button, View, Text } from 'react-native';
import localStrings from "../resources/localStrings";
import { container, title } from "../styles/PageStyles";

class HomePage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            selectedUser: undefined
        };
    };

    onSelectUser = (userName) => {
        this.setState({
            selectedUser: userName
        });
    }

    render() {
        const { selectedUser } = this.state;
        return (
            <View style={container}>
                <Text style={title}>{localStrings.homeTitle}</Text>
                { selectedUser &&
                    <View style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
	                    <Text style={{ paddingBottom: 10, fontSize: 16 }}>{localStrings.selectedUserTitle}</Text>
	                    <Text>{selectedUser}</Text>
                    </View>
                }
                <View style={{paddingTop: 100}}>
	                <Button
	                    title={localStrings.linkUser}
	                    onPress={() => this.props.navigation.navigate('LinkUser', {
	                        onSelectUser: this.onSelectUser
	                    })}
	                />
                </View>
            </View>
        );
    }
}

export default HomePage;