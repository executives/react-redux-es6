import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';


const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

/*
const Header = () => {
  return (
    <nav>
      <a href="" activeClassName="active">Ticketing System</a>
      {" | "}
      <a href="" activeClassName="active">Security Wiki</a>
      {" | "}
      <IndexLink to="/" activeClassName="active">
        <img src="../../img/jira-logo-scaled.png" className="img-responsive" />
      </IndexLink>
    </nav>
  );
};
*/
export default Header;
