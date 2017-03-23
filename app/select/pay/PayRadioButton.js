/**
 * Created by tfn on 17-3-21.
 */
import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import PayView from './PayView';

export default class PayRadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedText: '支付宝',
        };
    }

    getChildContext() {
        return {
            onSelect: this._onSelect,
        };
    }

    _onSelect = (payType) => {
        this.setState({
            selectedText: payType,
        });

        //真实调用的是在SelectPage中的方法
        if (this.props.onSelect) {
            this.props.onSelect(payType);
        }
    };

    render() {

        let payView = React.Children.map(this.props.children, (payCell, index) => {

            //返回的组件重新使用PayView包裹，因为要加上一些index或者key信息来标示唯一性
            //包括其他的一些属性像isSelected
            return <PayView
                {...payCell.props}
                index={index}
                isSelected={this.state.selectedText === payCell.props.payText}
            />;
        });

        return (
            <View>
                {payView}
            </View>
        );
    }
}

PayRadioButton.childContextTypes = {
    onSelect: PropTypes.func.isRequired,
};