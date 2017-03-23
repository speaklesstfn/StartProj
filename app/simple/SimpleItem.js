/**
 * Created by tfn on 17-3-20.
 */

import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class SimpleItem extends Component {

    /**
     * 选择要显示的图片
     * @param picName
     * @returns {*}
     * @private
     */
    _getImage = (picName) => {
        switch (picName) {
            case '1':
                return require('../assets/simpleListView/1.png');
            case '2':
                return require('../assets/simpleListView/2.png');
            case '3':
                return require('../assets/simpleListView/3.png');
            case '4':
                return require('../assets/simpleListView/4.png');
        }
    };

    render() {
        return (
            <View
                style={styles.view}
            >
                <Image source={this._getImage(this.props.picName)}/>

                <View
                    style={styles.contentView}
                >
                    <Text style={styles.nameText}>{this.props.name}</Text>
                    <Text style={styles.authorText}>{this.props.author}</Text>
                    <Text style={styles.stepsText}>{this.props.steps}个步骤</Text>
                    <Text
                        style={styles.otherText}
                        numberOfLines={1}
                    >
                        {this.props.pageView}次浏览 {this.props.collection}人收藏
                    </Text>
                </View>

            </View>
        );

    }
}

SimpleItem.propTypes = {
    picName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    steps: PropTypes.string.isRequired,
    pageView: PropTypes.string.isRequired,
    collection: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 20,
    },
    contentView: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    nameText: {
        color: '#000000',
        fontSize: 17,
    },
    authorText: {
        fontSize: 15,
    },
    stepsText: {
        fontSize: 15,
        color: '#000000',
    },
    otherText: {
        fontSize: 13,
    },
});