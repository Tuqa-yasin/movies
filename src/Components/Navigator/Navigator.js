import { Title } from "../../Screen/Movie/MovieScreen.Styles";
import { useHistory } from "react-router";

function Navigator(props) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <Title>
      <span
        style={{ color: "#707070", marginRight: 5, cursor: "pointer" }}
        onClick={goBack}
      >
        Back
      </span>
      /{props.name}
    </Title>
  );
}

export default Navigator;