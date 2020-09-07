import React, { Component } from 'react';
import {
    Modal, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, View,
    Text,
    Platform,
} from 'react-native';
import CommomStyles from '../CommonStyles';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/pt-br';

const initialState = {
    description: "",
    date: new Date(),
    showDatePicker: false
}

export default class AddTask extends Component {
    state = { ...initialState }

    getDateTimePicker = () => {
        let datePicker = <DateTimePicker value={this.state.date}
            mode="date"
            onChange={(_, date) => this.setState({ date, showDatePicker: false })} />
        if (Platform.OS === "android") {
            datePicker = (<View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                    <Text style={styles.date}>{moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}</Text>
                </TouchableOpacity>
                {this.state.showDatePicker && datePicker}
            </View>)
        }
        return datePicker;
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel} animationType="slide">
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ flex: 2, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <View style={styles.container}>
                        <Text style={styles.header}>Nova Tarefa</Text>
                        <TextInput placeholder="New Task" style={styles.input}
                            value={this.state.description}
                            onChangeText={(description) => this.setState({ description })} />
                        {this.getDateTimePicker()}
                        <View style={styles.buttons}>
                            <TouchableOpacity onPress={() => {
                                this.props.onCancel()
                                this.setState({ ...initialState })
                            }}>
                                <Text style={styles.button}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.props.onSave({ description: this.state.description, date: this.state.date })
                                this.setState({ ...initialState })
                            }}>
                                <Text style={styles.button}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    header: {
        fontFamily: CommomStyles.fontFamily,
        color: CommomStyles.colors.secondary,
        backgroundColor: CommomStyles.colors.today,
        textAlign: "center",
        fontSize: 20,
        padding: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    input: {
        fontFamily: CommomStyles.fontFamily,
        borderBottomWidth: 1,
        height: 40,
        borderColor: 'transparent',
        borderBottomColor: '#e3e3e3',
        margin: 15,
        color: CommomStyles.colors.mainText,
        fontWeight: "bold"
    },
    buttons: {
        flex: 1,
        minHeight: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: CommomStyles.colors.today,
        padding: 15,
    },
    date: {
        color: CommomStyles.colors.mainText,
        fontFamily: CommomStyles.fontFamily,
        fontSize: 17,
        padding: 10,
        paddingLeft: 20,
        textAlign: "left"
    }
})