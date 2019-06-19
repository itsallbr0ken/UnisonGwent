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

type Props = {};

export default class News extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: "Latest News",
        drawerIcon: ({ tintColor }) => {
            return (
                <Icon
                    raised
                    name='list'
                    type='font-awesome'
                    color='#f50'
                    size={15}
                />
            )
        }
    }

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        return fetch("https://team-hamster.co.uk/wp-json/wp/v2/posts?page=1&per_page=20&orderby=date&order=desc&_embed")
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        //TODO: Store the data and use it, update on inital load but use stored after initial load
                        isLoading: false,
                        dataSource: responseJson
                    },
                    function () {


                        // console.log("responseJson", responseJson)



                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {


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
                    centerComponent={{ text: 'Latest News', style: { color: '#000' } }}

                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        borderBottomColor: "blue",
                        borderBottomWidth: 2
                    }}
                />
                <View style={styles.body}>

                    {this.state.isLoading ?
                        (
                            <ActivityIndicator size="large" color="#0000ff" style={styles.activity} />
                        )
                        : (
                            <FlatList
                                data={this.state.dataSource}
                                renderItem={({ item }) => <Card><Text>{item.title.rendered}</Text></Card>}
                            />
                        )}

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
    body: {
        height: "85%",
        backgroundColor: "#eee"
    },
    activity: {
        marginTop: 20
    }
});
