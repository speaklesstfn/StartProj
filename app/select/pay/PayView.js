/**
 * Created by tfn on 17-3-21.
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
 * 支付方式单选按钮
 */
export default class PayView extends Component {

    getSelectStatus = () => {
        if (this.props.isSelected) {
            return require('../../assets/selectPage/paySelect_icon.png');
        }
        return require('../../assets/selectPage/payUnSelect_icon.png');
    };

    getPayImg = (payText) => {
        switch (payText) {
            case '支付宝':
                return require('../../assets/selectPage/alipay_icon.png');
            case '微信支付':
                return require('../../assets/selectPage/weipay_icon.png');
            default:
                return require('../../assets/selectPage/weipay_icon.png');
        }
    };

    render() {
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => this.context.onSelect(this.props.payText)}
                >
                    <View style={styles.payView}>
                        <Image source={this.getSelectStatus()} style={styles.selectImg}/>
                        <Image source={this.getPayImg(this.props.payText)}/>
                        <Text style={styles.payText}>{this.props.payText}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.separatorView}></View>

            </View>
        );
    }
}

PayView.propTypes = {
    payText: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
};

PayView.defaultProps = {
    isSelected: false,
};

PayView.contextTypes = {
    onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    payView: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectImg: {
        marginHorizontal: 15,
    },
    payText: {
        fontSize: 20,
        color: '#000000',
        marginLeft: 10,
    },
    separatorView: {
        height: 1,
        marginHorizontal: 15,
        backgroundColor: '#a9a9a9',
    },
});