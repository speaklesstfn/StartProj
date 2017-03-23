/**
 * Created by tfn on 17-3-21.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    BackAndroid,
    TouchableOpacity,
    Alert,
} from 'react-native';

import PayRadioButton from './pay/PayRadioButton';
import PayView from './pay/PayView';

import SkuRadioButton from './sku/SkuRadioButton';
import SkuView from './sku/SkuView';

export default class SectionListView extends Component {

    componentDidMount() {
        let {navigator} = this.props;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }

    componentDidUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    _onBackButtonClick = () => {
        let {navigator} = this.props;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
        }
    };

    /**
     * 选中支付方式某项后的反应
     * @param payText
     * @private
     */
    _onPaySelect = (payText) => {
        Alert.alert(`支付方式选择了${payText}`);
    };

    /**
     * 选中sku数量某项后的反应
     * @param value
     * @private
     */
    _onSkuSelect = (value) => {
        Alert.alert(`数量选择了${value}`);
    };

    render() {
        return (
            <View
                style={styles.view}
            >
                <View style={styles.titleView}>

                    <TouchableOpacity style={styles.leftButton} onPress={this._onBackButtonClick}>
                        <Image source={require('../assets/back.png')}/>
                    </TouchableOpacity>

                    <Text
                        style={styles.titleText}
                    >
                        选择列表页
                    </Text>
                </View>

                <View
                    style={styles.couponTitle}
                >
                    <Text style={styles.couponText}>优惠券</Text>
                </View>

                <View style={styles.couponView}>
                    <TouchableOpacity
                        style={styles.couponTouchable}
                    >
                        <Text style={styles.couponBtnText}>使用优惠券：满100减10</Text>
                        <Image source={require('../assets/selectPage/arrow_list.png')} style={styles.arrowImg}/>
                    </TouchableOpacity>
                    <View style={styles.couponSep}></View>
                </View>

                <View
                    style={styles.couponTitle}
                >
                    <Text style={styles.couponText}>支付方式</Text>
                </View>

                <PayRadioButton
                    onSelect={(payText) => this._onPaySelect(payText)}
                >
                    <PayView
                        payText={'支付宝'}
                    />
                    <PayView
                        payText={'微信支付'}
                    />
                    <PayView
                        payText={'微付'}
                    />
                </PayRadioButton>

                <SkuRadioButton
                    onSelect={(value) => this._onSkuSelect(value)}
                >
                    <SkuView
                        isDisabled={false}
                        text={'1盒'}
                        value={'1'}
                    />
                    <SkuView
                        isDisabled={true}
                        text={'半打(6盒)'}
                        value={'6'}
                    />
                    <SkuView
                        isDisabled={false}
                        text={'1打(12盒)'}
                        value={'12'}
                    />
                    <SkuView
                        isDisabled={false}
                        text={'1箱(24盒)'}
                        value={'24'}
                    />
                </SkuRadioButton>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    titleView: {
        height: 44,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        color: '#ffffff',
    },
    couponTitle: {
        height: 45,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
    },
    couponText: {
        color: '#48d1cc',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    couponView: {
        height: 60,
    },
    couponTouchable: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    couponBtnText: {
        color: '#000000',
        fontSize: 20,
        marginLeft: 15,
    },
    arrowImg: {
        position: 'absolute',
        right: 15,
    },
    couponSep: {
        height: 1,
        backgroundColor: '#a9a9a9',
    },
});