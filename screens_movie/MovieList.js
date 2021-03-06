import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import BigCatalogList from '../components_movie/BigCatalogList';
import SubCatalogList from '../components_movie/SubCatalogList';

export default class MovieList extends Component{
    render(){

        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";

        return(
            <ScrollView style={styles.root}>
                {/* 큰 이미지는 가로 스크롤(페이징)으로 보여주기 */}
                <BigCatalogList 
                    uri={bigUrl} 
                    onPress={(id)=>{
                        this.props.navigation.navigate('MovieDetail', {id:id});
                    }}
                ></BigCatalogList>

                {/* 최신등록순 */}
                <SubCatalogList
                    title="최신등록순" 
                    uri={recentUrl}
                    onPress={id=>this.props.navigation.navigate('MovieDetail', {id})}
                ></SubCatalogList>

                {/* 평점순 */}
                <SubCatalogList 
                    title="평점순" 
                    uri={ratingtUrl}
                    onPress={id=>this.props.navigation.navigate('MovieDetail', {id})}
                />

                {/* 다운로드순 */}
                <SubCatalogList 
                    title="다운로드순" 
                    uri={downloadUrl}
                    onPress={id=>this.props.navigation.navigate('MovieDetail', {id})}
                />
            </ScrollView>
        );
    }

    // 제목줄 작업
    componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight: ()=>{
                return (
                    // this.props.navigation.openDrawer() (열기) == this.props.navigation.toggleDrawer() (열고 닫기)
                    <TouchableOpacity style={{marginRight:16}} onPress={()=>this.props.navigation.openDrawer()}>
                        <Image source={require('../Images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                );
            },
            headerLeft: ()=>(
                <TouchableOpacity 
                    onPress={ async()=>{
                        await AsyncStorage.removeItem('email');
                        this.props.navigation.replace('Intro');
                    }} 
                    style={{marginLeft:16, flexDirection:"row", alignItems:"center"}}
                >
                    <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                    <Text style={{marginLeft:4}}>로그아웃</Text>
                </TouchableOpacity>
            )
                
        });
    }

}

const styles=StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
});