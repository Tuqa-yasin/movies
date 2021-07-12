import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import { Route } from "react-router";
import MovieScreen from "./Screen/Movie/MovieScreen";

function App() {
  
  return (
    <MainContainer>
      <Nav />
      <Route path={"/"} exact={true} component={HomeScreen} /> 
      <Route
        path={"/Movie/:id"}
        exact={true}
        component={MovieScreen}
      />
    </MainContainer>
  );
}

export default App;
