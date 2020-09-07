import React from 'react';
import {
    View, Text, StyleSheet, TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import CommomStyles from '../CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';


export default (props) => {
    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: "line-through" } : {}
    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMM');
    const getRightContents = () => {
        return (<TouchableOpacity style={styles.right} onPress={()=> props.delete(props.id)}>
            <Icon name="trash" size={30} color="#fff" />
        </TouchableOpacity>)
    }
    const getLeftContents = () => {
        return (<View style={styles.left}>
            <Icon name="trash" size={30} color="#fff" style={styles.excludeIcon} />
            <Text style={styles.excludeText}>Excluir</Text>
        </View>)
    }

    return (
        <Swipeable renderRightActions={getRightContents}
            renderLeftActions={getLeftContents}
            onSwipeableLeftOpen={() => props.delete(props.id)}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name="check" size={20} color="#FFF" />
            </View>
        )
    } else {
        return (
            <View style={styles.pending}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: "#aaa",
        borderBottomWidth: 1,
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "#fff"
    },
    checkContainer: {
        width: "20%",
        alignItems: "center"
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555"
    },
    done: {
        alignItems: "center",
        justifyContent: "center",
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555",
        backgroundColor: "#4d7031"
    },
    desc: {
        fontFamily: CommomStyles.fontFamily,
        color: CommomStyles.colors.mainText,
        fontSize: 15,
        fontWeight: "bold"
    },
    date: {
        fontFamily: CommomStyles.fontFamily,
        color: CommomStyles.colors.subText,
        fontSize: 12,
        fontWeight: "bold"
    },
    right: {
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 20
    },
    left: {
        flex: 1,
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center"
    },
    excludeText: {
        fontFamily: CommomStyles.fontFamily,
        color: "#fff",
        fontSize: 20,
        margin: 10
    },
    excludeIcon: {
        marginLeft: 10
    }
})