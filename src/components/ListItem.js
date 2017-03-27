import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    // renderDescription() {
    //     const { library, selectedLibraryId } = this.props;
    //     console.log("before hitting", this.props);
    //     if (library.id === selectedLibraryId) {
    //         console.log("hitt");
    //         return (
    //             <Text> {library.description}</Text>
    //         )
    //     }
    // }


    renderDescription() {
        const { library, expanded } = this.props;
        console.log("before hitting", this.props);
        if (expanded) {
            console.log("hitt");
            return (
                <CardSection>
                    <Text> {library.description}</Text>
                </CardSection>

            )
        }
    }

    render() {
        const { titleStyle } = styles;
        //console.log(this.props);
        const { id, title } = this.props.library;



        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection >
                        <Text style={titleStyle}> {title} </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>

            </TouchableWithoutFeedback>

        )
    }

}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,

    }
};

const mapStateToProps = (state, ownProps) => {

    console.log("ownProps", ownProps);
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };

}



export default connect(mapStateToProps, actions)(ListItem);


