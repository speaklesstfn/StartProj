/**
 * Created by tfn on 17-3-20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import SimpleListView from './simple/SimpleListView';
import SimpleListView2 from './simple2/SimpleListView2';
import SectionListView from './section/SectionListView';
import SelectPage from './select/SelectPage';

/**
 * 主页
 */
export default class Home extends Component {

    _onSimpleClick = () => {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'simpleListView',
                component: SimpleListView,
            });
        }
    };

    _onSimpleClick2 = () => {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'simpleListView2',
                component: SimpleListView2,
            });
        }
    };

    _onSectionClick = () => {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'sectionListView',
                component: SectionListView,
            });
        }
    };

    _onSelectClick = () => {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'selectPage',
                component: SelectPage,
            });
        }
    };

    render() {
        return (
            <View
                style={styles.view}
            >

                <View style={styles.titleView}>
                    <Text
                        style={styles.titleText}
                    >
                        Home
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onSimpleClick}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        简单列表页1
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onSimpleClick2}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        简单列表页2
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onSectionClick}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        分段列表页
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onSelectClick}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        选择列表页
                    </Text>
                </TouchableOpacity>

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
    titleText: {
        fontSize: 20,
        color: '#ffffff',
    },
    button: {
        height: 45,
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#1e90ff',
        borderColor: '#1e90ff',
    },
    buttonText: {
        fontSize: 20,
    },
});