import React, { Component } from "react";
import * as api from "../utils/api";
import { NavLink } from "react-router-dom";

function MakeList(props) {
  return (
    <ul className="cars-make-list">
      {props.make.map(function(car, index) {
        return (
          <li className="make-item" key={index}>
            <NavLink to={"/MakeDetails/" + car.make} exact strict>
              <img src={car.logo} alt={car.make} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      carList: [],
      loading: true
    };
  }

  componentDidMount() {
    api.fetchCarData().then(data => {
      const carList = Array.from(new Set(data.map(item => item.make))).map(
        make => {
          return {
            make: make,
            logo: data.find(x => x.make === make).logo
          };
        }
      );
      this.setState({
        carList,
        loading: false
      });
      localStorage.setItem("carList", JSON.stringify(data));
    });
  }

  render() {
    const loading = this.state.loading;
    if (loading === true) {
      return <div className="loader" />;
    }
    return <MakeList make={this.state.carList} />;
  }
}

export default Home;
