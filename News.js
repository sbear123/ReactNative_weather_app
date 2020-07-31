import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, Linking } from 'react-native'; //flatList는 데이터의 키값에 따라 반복적인 리스트를 만들어 주는 react-native전용 컴포넌트입니다.

const NewsCard = ({item}) => {
    return (<View style={styles.cardWrap}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.date}>{item.publishedAt}</Text>
        <Text style={styles.description} numberOfLines={3}>
            {item.description}
        </Text>
        <Text style={styles.source} numberOfLines={1} onPress={() => Linking.openURL(item.url)}>{item.url}</Text>
    </View>
    );
}


function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    function getNewsFromAPI() {
        axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=219ca3f214c941dcbea9c6291420fe4e')
      .then(async function (res) {
        console.log(res.data); // 데이터를 콘솔에 찍어보겠습니다.
        setNews(res.data) // setNews에 바뀐 값을 넣어주는 코드입니다.
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    // news에 값이 담기지 않았을경우 error를 무시하기 위해서 
    if (!news) {
        return null;
    }

    return (
        // FlatList는 자체적으로 스크롤뷰를 제공함으로 ScrollView를 빼주어도 무방합니다.
        <View>
            <FlatList
                data={news.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                return <NewsCard item={item} />
                }}
            />
        </View>
    );
}
  const styles = StyleSheet.create({
    cardWrap: {
      ...Platform.select({
        ios: {// ios 그림자
          shadowColor: "#000",
          shadowOffset: { width: 0.2, height: 0.5 },
          shadowOpacity: 0.5,
          shadowRadius: 1,
        },
        android: {//안드로이드 그림자
          elevation: 4
        },
      }),
      backgroundColor: "white",
      margin: 8,
      marginTop: 30,
      borderRadius: 6,
    },
    textWrap: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      marginHorizontal: 8,
      marginVertical: 6,
    },
    title: {
      marginHorizontal: 8,
      marginVertical: 18,
      color: "black",
      fontSize: 20,
      fontWeight: "800"
    },
    description: {
      marginHorizontal: 8,
      marginVertical: 8,
      color: "gray",
      fontSize: 18
    },
    image: {
      height: 160,
      marginHorizontal: 8,
      marginVertical: 6
    },
    author: {
      marginHorizontal: 8,
      marginVertical: 6,
      fontSize: 14,
      color: "gray"
    },
    date: {
      marginHorizontal: 8,
      marginVertical: 6,
      textAlign: "right",
      fontSize: 14,
      color: "gray"
    },
    source: {
      marginHorizontal: 8,
      marginVertical: 6,
      textAlign: "right",
      fontSize: 14,
      color: "gray"
    }
  });

  export default News;