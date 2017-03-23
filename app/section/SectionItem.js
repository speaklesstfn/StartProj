/**
 * Created by tfn on 17-3-21.
 */
import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
} from 'react-native';

const {width,} = Dimensions.get('window');

export default class SectionItem extends Component {

    getImg = (data) => {
        switch (data) {
            case '11':
                return require('../assets/sectionListView/11.jpg');
            case '21':
                return require('../assets/sectionListView/21.jpg');
            case '22':
                return require('../assets/sectionListView/22.jpg');
            case '23':
                return require('../assets/sectionListView/23.jpg');
            case '24':
                return require('../assets/sectionListView/24.jpg');
        }
    };

    render() {
        return (
            <View
                style={styles.view}
            >
                <Image source={this.getImg(this.props.data)} style={styles.imgView} resizeMode={'contain'}/>
            </View>
        );
    }
}

SectionItem.propTypes = {
    data: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 7,
    },
    imgView: {
        width: width - 30,
        height: 150,
        borderRadius: 5,
    },
});