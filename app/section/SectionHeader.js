/**
 * Created by tfn on 17-3-21.
 */
import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

export default class SectionHeader extends Component {

    render() {
        let rightView = this.props.data === '精选菜单' ? <Text style={styles.moreView}>更多</Text> : null;
        return (
            <View
                style={styles.view}
            >
                <View style={styles.leftView}></View>
                <Text style={styles.sectionTitle}>{this.props.data}</Text>
                {rightView}
            </View>
        );
    }
}

SectionHeader.propTypes = {
    data: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftView: {
        width: 5,
        height: 20,
        marginLeft: 15,
        backgroundColor: '#ff0000',
        marginVertical: 10,
    },
    sectionTitle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    moreView: {
        color: '#ff0000',
        fontSize: 16,
        position: 'absolute',
        right: 17,
    },
});