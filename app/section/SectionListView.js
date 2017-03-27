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
    ListView,
} from 'react-native';

import SectionItem from './SectionItem';
import SectionHeader from './SectionHeader';

//模拟的数据
const data = {
    '精选菜单': [
        '11',
    ],
    '热门榜单': [
        '21',
        '22',
        '23',
        '24',
    ],
};

export default class SectionListView extends Component {

    constructor(props) {
        super(props);
        let dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            dataSource: dataSource.cloneWithRowsAndSections(data),
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

    _renderRow = (rowData, sectionID, rowID) => {
        return <SectionItem
            data={rowData}
        />;
    };

    _renderSectionHeader = (sectionData, sectionID) => {
        return <SectionHeader
            data={sectionID}
        />;
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
                        分段列表页
                    </Text>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData,sectionID,rowID) => this._renderRow(rowData,sectionID,rowID)}
                    renderSectionHeader={(sectionData, sectionID) => this._renderSectionHeader(sectionData,sectionID)}
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
});