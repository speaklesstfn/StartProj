/**
 * Created by tfn on 17-3-20.
 */

import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

export default class SimpleItem2 extends Component {

    render() {
        return (
            <View
                style={styles.view}
            >

                <View style={styles.answerView}>
                    <Text style={styles.answerText}>{this.props.answers}</Text>
                    <Text style={styles.answerText}>回答</Text>
                </View>

                <View
                    style={styles.contentView}
                >
                    <View
                        style={styles.infoView}
                    >
                        <View
                            style={styles.info}
                        >
                            <Text style={styles.nameText}>{this.props.name}</Text>
                            <Text style={styles.creditText}>{this.props.credit}声望</Text>
                            <Text style={styles.timeText}>{this.props.time}分钟前回答</Text>
                        </View>

                        <Image source={require('../assets/simpleListView2/img.png')}/>
                    </View>

                    <Text style={styles.titleText} numberOfLines={3}>{this.props.title}</Text>

                </View>

            </View>
        );

    }
}

SimpleItem2.propTypes = {
    answers: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginVertical: 20,
    },
    answerView: {
        width: 70,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90ee90',
        borderRadius: 5,
    },
    answerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    contentView: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 15,
        marginRight: 30,
    },
    infoView: {
        flexDirection: 'row',
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 15,
        color: '#ff0000',
    },
    creditText: {
        fontSize: 15,
        marginLeft: 10,
    },
    timeText: {
        fontSize: 15,
        marginLeft: 10,
    },
    titleText: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
});