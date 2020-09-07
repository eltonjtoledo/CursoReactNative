import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Alert } from 'react-native';
import CommomStyles from '../CommonStyles';
import Task from '../components/Task';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import todayImage from '../../assets/imgs/today.jpg';
import moment from 'moment';
import 'moment/locale/pt-br';

import AddTask from './AddTask';
const initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}

export default class TaskList extends Component {
    state = { ...initialState }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('taskState');
        const state = JSON.parse(stateString) || initialState;
        this.setState(state)
        this.toggleFilter();
    }

    toggleFilter = () => {
        const tasks = [...this.state.tasks];
        const visibleTasks = tasks.filter((task) => task.doneAt === null || this.state.showDoneTasks == true);
        this.setState({ visibleTasks });
        AsyncStorage.setItem('taskState', JSON.stringify(this.state))
    }

    toggleTask = (taskId) => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date();
            }
        })
        this.setState({ tasks }, this.toggleFilter);
    }

    toggleShowDoneTask = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.toggleFilter);
    }

    AddTask = (data) => {
        if (!data.description || !data.description.trim()) {
            Alert.alert("Dados invalidos", "Descrição não informada");
            return
        }


        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.ceil(Math.random() * 100 - 1),
            desc: data.description,
            estimateAt: data.date,
            doneAt: null
        });
        this.setState({ tasks, showAddTask: false }, this.toggleFilter);
        AsyncStorage.setItem('taskState', JSON.stringify(this.state));
    }

    delete = (taskId) => {
        const tasks = [...this.state.tasks];
        tasks.forEach((task, index) => {
            if (task.id == taskId) {
                tasks.splice(index, 1);
            }
        });
        this.setState({ tasks }, this.toggleFilter)
        AsyncStorage.setItem('taskState', JSON.stringify(this.state));
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.AddTask} />
                <ImageBackground source={todayImage} style={styles.background} >
                    <View>
                        <TouchableOpacity style={styles.barEye} onPress={() => this.toggleShowDoneTask()}>
                            <Icon name={this.state.showDoneTasks === true ? 'eye' : 'eye-slash'} style={styles.iconEye} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks} keyExtractor={item => `${item.id}`}
                        renderItem={
                            ({ item }) => {
                                return <Task {...item} delete={this.delete} toggleTask={this.toggleTask} />
                            }
                        }>
                    </FlatList>

                </View>

                <TouchableOpacity activeOpacity={0.6} style={styles.addButton} onPress={() => this.setState({ showAddTask: true })}>
                    <Icon name="plus" color={CommomStyles.colors.secondary} size={25} />
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: CommomStyles.fontFamily,
        color: CommomStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: CommomStyles.fontFamily,
        color: CommomStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    barEye: {
        flexDirection: "row",
        marginTop: Platform.OS == "ios" ? 30 : 10,
        paddingRight: 10,
        justifyContent: "flex-end"
    },
    iconEye: {
        color: "#fff",
        fontSize: 25,
    },
    addButton: {
        position: "absolute",
        right: 30,
        bottom: 20,
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: CommomStyles.colors.today,
        justifyContent: "center",
        alignItems: "center",
    }
});