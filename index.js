/** @format */
import React,{ Component } from 'react';
import {AppRegistry,StyleSheet,Image,Text,View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TabNavigator from 'react-native-tab-navigator';
export default class FirstApp extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'home',
        }
    }
    render(){

        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('res/images/ic_popular.png')} />}
                        renderSelectedIcon={() => <Image source={require('res/images/ic_popular.png')} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        {homeView}
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon= {() => <Image source = {require('res/images/ic_trending.png')}/>}
                        renderSelectedIcon = {() => <Image source = {require('res/images/ic_trending.png')} />}
                        renderBadge = {() => <CustomBadgeView/> }
                        onPress = {() => this.setState({selectedTab: 'profile'})}>
                        {
                            profileView
                        }
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    page1:{
        flex:1,
        backgroundColor: 'red',

    },
    page2:{
        flex:1,
        backgroundColor:'yellow',
    }
});


AppRegistry.registerComponent('FirstApp', () => FirstApp);