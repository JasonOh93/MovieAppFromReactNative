import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';

const BigCatalog=(props)=>{
    return(
        <TouchableOpacity activeOpacity={0.9} onPress={()=>props.onPress!=undefined && props.onPress(props.movieData.id)}>
            <Image 
                source={{uri:props.movieData.large_cover_image}}
                // Dimensions.get('window') 윈도우 창의 크기 만큼 => 객체로 온다
                style={{width: Dimensions.get('window').width, height:300}}
            ></Image>

            {/* 겹쳐서 영화정보 출력 : position을 absolute로 */}
            <View style={styles.infoContainer}>
                <Text style={styles.labelYear}>{props.movieData.year}년 개봉</Text>
                <View style={styles.labelContainer}>
                    <Text style={styles.labelTitle}>{props.movieData.title}</Text>
                    {/* .join(', ') 배열에 join을 쓰면 해당 글을 붙여서 하나의 문자열로 나타나게 해준다 */}
                    <Text style={styles.labelGenres}>{props.movieData.genres.join(', ')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
} 

const styles=StyleSheet.create({
    infoContainer:{
        position:"absolute",
        bottom:0,
        width:'100%',
        alignItems:'flex-start'
    },
    labelYear:{
        color:'white',
        padding:8,
        fontWeight:"bold",
        marginLeft:4,
        backgroundColor:"#E70915"
    },
    labelContainer:{
        backgroundColor:"#141414",
        width:'100%',
        paddingBottom:8,
        opacity:0.7
    },
    labelTitle:{
        fontSize:18,
        fontWeight:"bold",
        color:'white',
        padding:8
    },
    labelGenres:{
        fontSize:12,
        color:'white',
        padding:8
    }
});

export default BigCatalog;