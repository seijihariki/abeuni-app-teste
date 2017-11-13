import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, Image, View, FlatList} from 'react-native';
import * as firebase from "firebase";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            events: []
        }
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDVDefC3iAYzUnRxj2B5HtqHEoKqvYcKjo",
            authDomain: "hackathon-panda.firebaseapp.com",
            databaseURL: "https://hackathon-panda.firebaseio.com",
            projectId: "hackathon-panda",
            storageBucket: "hackathon-panda.appspot.com",
            messagingSenderId: "415762703810"
        })
    };

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        let eventPath = "/events";
        firebase.database().ref(eventPath).on('value', (snapshot) => {
            if (snapshot.val()) {
                let today = new Date();
                let events = [];
                for (let i in snapshot.val()) {
                    if (snapshot.val()[i].endTimeDate > today.getTime()) {
                        let event = Object.assign(snapshot.val()[i]);
                        let startDate = new Date(event.startTimeDate);
                        let endDate = new Date(event.endTimeDate);
                        event.startDate = startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear();
                        event.startTime = startDate.getHours() + "h" + startDate.getMinutes() + "m";
                        event.endDate = endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear();
                        event.endTime = endDate.getHours() + "h" + endDate.getMinutes() + "m";
                        events.push(event);
                    }
                }
                this.setState({
                    isLoading: false,
                    events: events
                });
            }
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.events}
                          renderItem={({item}) => <AbeuniEvent title={item.title} image={item.image}
                                                               description={item.description} startDate={item.startDate}
                                                               startTime={item.startTime} endDate={item.endDate}
                                                               endTime={item.endTime} url={item.url}
                                                               location={item.location}/>}/>
            </View>
        );
    }
}

class AbeuniEvent extends React.PureComponent {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.left}>
                    <Text style={styles.date}>{this.props.startDate}</Text>
                    <Text style={styles.time}>{this.props.startTime}</Text>
                    <Text style={styles.date}>{this.props.endDate}</Text>
                    <Text style={styles.time}>{this.props.endTime}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(this.props.url)}>
                        <Text style={styles.buttonText}>Mais ></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.right}>
                    <Image style={styles.image} source={{uri: this.props.image}}/>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <Text style={styles.location}>Local: {this.props.location}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 50,
        alignSelf: 'stretch',
        flex: 1
    },
    card: {
        borderRadius: 4,
        borderColor: '#ff0000',
        borderWidth: 0.5,
        marginTop: 10,
        flex: 1,
        width: 300,
        flexDirection: 'row'
    },
    left: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 5,
        width: 40,
        backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    right: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 5,
        width: 200
    },
    image: {
        width: 190,
        height: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: 190
    },
    description: {
        fontSize: 10,
        width: 190
    },
    date: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
    time: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },
    location: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
});
