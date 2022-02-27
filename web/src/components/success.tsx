import { Link } from "react-router-dom";

export const Success = () => (
  <div className="form-wrapper">
    <div className="form-container">
    <div className="label success">Verification Successful !! </div>
      <Link to="/">Try Again!</Link>
    </div>
  </div>
);
