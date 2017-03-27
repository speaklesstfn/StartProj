/**
 * Created by tfn on 17-3-20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    BackAndroid,
    Image,
    TouchableOpacity,
} from 'react-native';

import SimpleItem2 from './SimpleItem2';

// 模拟的数据
const data = [{
    answers: '31',
    name: 'grace',
    credit: '13',
    time: '5',
    title: '戚风蛋糕需要放泡打粉吗？',
}, {
    answers: '113',
    name: 'grace',
    credit: '13',
    time: '5',
    title: '买来的黄油已经软了，还可以使用吗？如果重新冰冻会影响口感吗？',
}, {
    answers: '27',
    name: 'grace',
    credit: '13',
    time: '7',
    title: '烘焙套装买什么牌子好呢？',
}, {
    answers: '1',
    name: 'grace',
    credit: '13',
    time: '9',
    title: '做面包到底什么牌子的面粉好而且价格实惠？求推荐！！',
}, {
    answers: '246',
    name: 'grace',
    credit: '13',
    time: '10',
    title: '微话题|你们那里5块钱能买到什么？',
}, {
    answers: '2',
    name: 'grace',
    credit: '13',
    time: '15',
    title: '这两种蛋挞到底哪里不一样呢？',
},];

/**
 * 简单列表页2
 */
export default class SimpleListView2 extends Component {

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow,
        });
        this.state = {
            dataSource: dataSource.cloneWithRows(data),
        };
    }

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

    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    _onBackButtonClick = () => {
        let {navigator} = this.props;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
        }
    };

    /**
     * 渲染每一行数据
     * @private
     */
    _renderRow = (rowData, sectionID, rowID) => {
        let {
            answers,
            name,
            credit,
            time,
            title,
        } = rowData;

        return (
            <SimpleItem2
                answers={answers}
                name={name}
                credit={credit}
                time={time}
                title={title}
            />
        );
    };

    /**
     * 在每一行数据下插入分隔线
     * @param sectionID
     * @param rowID
     * @returns {XML}
     * @private
     */
    _renderSep = (sectionID, rowID) => {
        return (
            <View
                style={styles.separatorView}
                key={sectionID+rowID}
            >

            </View>
        );
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
                        简单列表页2
                    </Text>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData,sectionID,rowID) => this._renderRow(rowData,sectionID,rowID)}
                    renderSeparator={(sectionID,rowID) => this._renderSep(sectionID,rowID)}
                />

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
    separatorView: {
        height: 1,
        backgroundColor: '#a9a9a9',
    },
});
