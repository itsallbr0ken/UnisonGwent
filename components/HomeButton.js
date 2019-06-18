import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements'

export default class HomeButton extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (


            <Button style={styles.button}
                icon={
                    <Icon
                        raised
                        name={this.props.iconName}
                        size={this.props.iconSize}

                        type={this.props.iconType}
                    />
                }

                title={this.props.title}
                raised
                titleStyle={styles.title}
                iconContainerStyle={styles.listIcon}
                containerStyle={styles.listContainer}
            />


        );
    }
}

const styles = StyleSheet.create({
    button: {
        //marginBottom: 20
    },
    title: {
        display: "flex",
        flexDirection: "row",
        flex: 2,
        textAlign: "left",
        paddingLeft: 20
    },
    listIcon: {
        display: "flex",
        flexDirection: "row",
        flex: 2
    },
    listContainer: {
        marginBottom: 20
    }
});