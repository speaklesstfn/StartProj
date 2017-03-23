/**
 * Created by tfn on 17-3-23.
 */
import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Text,
    Image,

} from 'react-native';

import SkuView from './SkuView';

export default class SkuRadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '1',
        };
    }

    getChildContext() {
        return ({
            onSelect: this._onSelect,
        });
    }

    _onSelect = (value) => {
        this.setState({
            selectedValue: value,
        });

        if (this.props.onSelect) {
            this.props.onSelect(value);
        }
    };

    render() {

        let skuView = React.Children.map(this.props.children, (sku, index) => {
            return <SkuView
                {...sku.props}
                isSelected={this.state.selectedValue === sku.props.value}
                index={index}
            />;
        });

        return (
            <View style={styles.view}>
                {skuView}
            </View>
        );
    }

}

SkuRadioButton.childContextTypes = {
    onSelect: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 10,
        marginHorizontal: 10,
    },
});