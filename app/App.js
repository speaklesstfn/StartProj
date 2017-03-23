/**
 * Created by tfn on 17-3-20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Navigator,
} from 'react-native';

import Home from './Home';

/**
 * 程序入口类
 */
export default class App extends Component {
    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{name:'home',component:Home}}
                configureScene={(route,routeStack) => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route,navigator)=>{
                        return <route.component {...route.params} name={route.name} navigator={navigator}/>
                    }}
            >
            </Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});