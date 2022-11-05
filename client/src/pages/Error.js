import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not Found" />
        <h3>Page Does Not Exist!</h3>
        <p>Please click to return to home page.</p>
        <Link to="/">Home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
