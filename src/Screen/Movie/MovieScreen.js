
import { FlexColumn, InnerSection, SpinnerContainer } from "../../Global.Styles";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  NavigatorSpan,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./MovieScreen.Styles";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { GetMoveisAction } from "../../Redux/Guest/GetMoveisAction";
import ActorCard from "../../Components/ActorCard/ActorCard";

function MovieScreen(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  const history= useHistory()
  const Movie= state.MovieState.Movie;  
  useEffect(()=>{
    dispatch(
      GetMoveisAction(params.id)
    )
  },[dispatch])


  return state.MovieState.isLoading  ? (
    <SpinnerContainer />
  ) :  (

    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <NavigatorSpan onClick={()=>history.goBack()} >Back</NavigatorSpan>
          <NavigatorSpan >/{Movie.title}</NavigatorSpan>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection
        img={"https://image.tmdb.org/t/p/w500"+ Movie.backdrop_path}
      >
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={
                "https://image.tmdb.org/t/p/w500"+ Movie.poster_path
              }
              alt={Movie.title}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                {Movie.title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                Polt
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {Movie.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={82} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                {Movie.vote_average}
                </InfoText>
              </ProgressBarContainer>{" "}
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                DIRECTOR
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                Enrico Casarosa
              </InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Actors</MoviesTitle>
        <CardsContainer>
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
        </CardsContainer>
      </InnerSection>
    </FlexColumn>
  );
}

export default MovieScreen;
