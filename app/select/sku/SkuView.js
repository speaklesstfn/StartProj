/**
 * Created by tfn on 17-3-23.
 */
import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';

const {width,} = Dimensions.get('window');

/**
 * 封装的单选cell
 */
export default class SkuView extends Component {

    render() {

        let pic = this.props.isSelected ?
            <Image source={require('../../assets/selectPage/skuBtn_selected_icon.png')} style={styles.pic}/> : null;

        return (
            <View
                style={[styles.view,{opacity: this.props.isDisabled?0.4:1,}]}
            >
                <TouchableWithoutFeedback
                    onPress={() => this.context.onSelect(this.props.value)}
                    disabled={this.props.isDisabled}
                >
                    <View
                        style={[styles.selectView,{borderColor:this.props.isSelected ? '#48d1cc': '#a9a9a9',}]}
                    >
                        <Text
                            style={[styles.text,{color:this.props.isSelected ? '#48d1cc': '#000000'}]}
                        >
                            {this.props.text}
                        </Text>

                        {pic}

                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

SkuView.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

SkuView.defaultProps = {
    isSelected: false,
};

SkuView.contextTypes = {
    onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    view: {
        width: (width - 20) / 3,
        height: 65,
    },
    selectView: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 3,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
    },
    pic: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
});