/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Icon, Header, Card, Button } from 'react-native-elements'
import HomeButton from '../components/HomeButton';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: "Home",
        drawerIcon: ({ tintColor }) => {
            return (
                <Icon
                    raised
                    name='home'
                    type='material'
                    color='#f50'
                    size={15}
                />
            )
        }
    }

    constructor(props) {
        super(props);

    }

    render() {

        var buttons = [
            { iconName: "facebook-square", iconSize: 20, iconType: "font-awesome", title: "Find us on Facebook" },
            { iconName: "twitter", iconSize: 20, iconType: "font-awesome", title: "Find us on Twitter" },
            { iconName: "envelope", iconSize: 20, iconType: "font-awesome", title: "Contact Us" },
            { iconName: "globe", iconSize: 20, iconType: "font-awesome", title: "Visit us Online" },
            { iconName: "phone", iconSize: 20, iconType: "font-awesome", title: "Call Us" },

        ];

        return (

            <View>
                <Header
                    leftComponent={<Icon
                        raised
                        name='menu'
                        type='material'
                        color='#f50'
                        size={15}

                        underlayColor="lightblue"
                        onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={{ text: 'Home', style: { color: '#000' } }}

                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        borderBottomColor: "blue",
                        borderBottomWidth: 2
                    }}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.list}>

                        <FlatList
                            data={buttons}
                            renderItem={({ item }) =>
                                <HomeButton
                                    iconName={item.iconName}
                                    iconSize={item.iconSize}
                                    iconType={item.iconType}
                                    title={item.title}
                                />
                            }
                        />



                    </View>

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonContainer: {
        //height: "85%",
        backgroundColor: "#eee"
    },
    list: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 10
    }
});
