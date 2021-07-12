import { FlexColumn, InnerSection } from "../../Global.Styles";
import {
  CardLink,
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMoviesInfoAction } from "../../Redux/Movies/GetMoviesInfoAction";
import { useState } from "react";


function HomeScreen(props) {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [pageNum , setPageNum] = useState(1);

  useEffect(()=>{
    dispatch(GetMoviesInfoAction(pageNum));
  },[dispatch , pageNum]) 
  const Movies = state.MoviesInfoState.GetMoviesInfo;
  {/*const Movies = state.MovieState.GetMoviesInfo;*/}

  return (
    <FlexColumn>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg" }
      >
        <InnerHeroSection>
          <Title>Title</Title>
          <Description>
            This is just a film description to get from the api
          </Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>

        {state.MoviesInfoState?.isLoading?(
        <CardsContainer>
        {Movies?.map((Pages)=>(
        Pages?.map((item)=>(
        <CardLink to={`/Movie/${props.id}/${props.name}`}>
        <Card
          key={item.id}
          id={item.id}
          name={item.title}
          img={ 
            "https://image.tmdb.org/t/p/w500/"+item.poster_path 
        }
        />
        </CardLink>
        ))))}
      </CardsContainer>
        ) : null}

      <LoadMore isLoading={false}
      onClick={()=>{
        setPageNum(pageNum+1);
        // dispatch(GetMoviesInfoAction(pageNum))
      }}
      >Load more...</LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}


export default HomeScreen;
 