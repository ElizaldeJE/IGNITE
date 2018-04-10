import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import Test from "../components/home/Ignition.jsx";


class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>
          <Test />
        </div>
      </div>
    );
  }


};

export default Home;
