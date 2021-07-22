import React, { Component } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import getData from "../utils/getData";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/Request.scss";

class Request extends Component {
  constructor() {
    super();
    this.state = {
      searchInputValue: [],
      data: [],
      loading: false,
      error: null,
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      ...this.state,
      searchValue: event.target.value,
    });
  };

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    try {
      const response = await getData(`${config.api}/api/request`);
      this.setState({
        ...this.state,
        loading: false,
        data: response.data.body,
      });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  }

  // handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   const newClient = client.filter((clientItem) => {
  //     if (
  //       clientItem.firstName
  //         .toLowerCase()
  //         .includes(searchInputValue.toLowerCase()) ||
  //       clientItem.tag.toLowerCase().includes(searchInputValue.toLowerCase())
  //     ) {
  //       return clientItem;
  //     }
  //   });

  //   setSearchValues(newClient);
  // };

  render() {
    return (
      <>
        <Search
          onChange={this.handleSearchChange}
          onSubmit={this.handleSearchSubmit}
        />
        <section className="request">
          <div className="request__table">
            <h4>Client</h4>
            <h4>Persona que llamo</h4>
            <h4>Teléfono</h4>
            <h4>Fecha y hora</h4>
            <h4>Contestó</h4>
            <h4>Detalle</h4>
            <h4>Editar</h4>
          </div>
          {this.state.data.map((requestItem) => {
            return (
              <div className="request__table" key={requestItem._id}>
                <p>{requestItem.client}</p>
                <p>{requestItem.name}</p>
                <p>{requestItem.phone}</p>
                <p>{requestItem.date}</p>
                <p>{requestItem.attendant}</p>
                <p>{requestItem.detail}</p>
                <Link to={`/request/${requestItem.id}/edit`}>
                  <FaPen />
                </Link>
              </div>
            );
          })}
        </section>
        {this.state.loading && <Loading />}
      </>
    );
  }
}

export default Request;
