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

import SimpleItem from './SimpleItem';

// 模拟的数据
const data = [{
    picName: '1',
    name: '焦糖布丁',
    author: '阿涛',
    steps: '10',
    pageView: '640540',
    collection: '4267',
}, {
    picName: '2',
    name: '浓香原味布丁',
    author: '黄夏妮',
    steps: '6',
    pageView: '528722',
    collection: '5435',
}, {
    picName: '3',
    name: '芒果布丁',
    author: '与世无争',
    steps: '6',
    pageView: '361799',
    collection: '24',
}, {
    picName: '4',
    name: '奶酪布丁',
    author: '小龙@烘焙帮',
    steps: '12',
    pageView: '221027',
    collection: '465',
},];

/**
 * 简单列表页
 */
export default class SimpleListView extends Component {

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
            picName,
            name,
            author,
            steps,
            pageView,
            collection,
        } = rowData;

        return (
            <SimpleItem
                picName={picName}
                name={name}
                author={author}
                steps={steps}
                pageView={pageView}
                collection={collection}
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
                        简单列表页
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
