import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Styled";

const NewsList = () => {
  //state 작성

  const [news, setNews] = useState([]);

  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}

  const fetchData = async() => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
      console.log(response);
      setNews(response.data.articles);
      // console.log(response.data.articles);
    }
    catch (error) {
      console.log("에러!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <S.Main>
        <S.Title>멋사 NEWS</S.Title>
        <S.Filter>
          <button onClick={fetchData}>전체</button>
          <button>스포츠</button>
          <button>연애</button>
          <button>경제</button>
        </S.Filter>
        
        {news.map((post) => (
          <S.NewsWrapper key={post.title}>
            { post.urlToImage === null ? <S.NewsImageNull src={post.urlToImage}></S.NewsImageNull> : <S.NewsImage src={post.urlToImage}></S.NewsImage> }
              {post.title}
              {post.author}
          </S.NewsWrapper>
        ))}
      </S.Main>
    </>
  );
};

export default NewsList;
