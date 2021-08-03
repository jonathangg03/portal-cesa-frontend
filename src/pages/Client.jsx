import React, { Component } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import getData from "../utils/getData";
import config from "../config";
import Loading from "../components/Loading";
import "../styles/pages/Client.scss";

class Client extends Component {
  constructor() {
    super();
    this.state = {
      searchInputValue: "",
      data: [],
      loading: false,
      error: null,
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      ...this.state,
      searchInputValue: event.target.value,
    });
  };

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    try {
      const response = await getData(`${config.api}/api/client`);
      this.setState({
        ...this.state,
        loading: false,
        data: response.data.body,
      });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  }

  handleSearchSubmit = async (event) => {
    event.preventDefault();
    this.setState({ ...this.state, loading: true });
    try {
      const response = await getData(`${config.api}/api/client`);
      const newClient = response.data.body.filter((clientItem) => {
        if (
          clientItem.name
            .toLowerCase()
            .includes(this.state.searchInputValue.toLowerCase())
        ) {
          return clientItem;
        }
      });
      this.setState({ ...this.state, data: newClient, loading: false });
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  };

  render() {
    return (
      <>
        <Search
          onChange={this.handleSearchChange}
          onSubmit={this.handleSearchSubmit}
          placeholder="Ingresa el nombre del cliente"
        />
        <section className="client">
          <div className="client__table">
            <h4>Cliente</h4>
            <h4>Detalle</h4>
            <h4>Editar</h4>
          </div>
          {this.state.data.map((clientItem) => {
            return (
              <div className="client__table" key={clientItem._id}>
                <p>{clientItem.name}</p>
                <Link to={`/client/detail/${clientItem._id}`}>
                  Ver información
                </Link>
                <Link
                  to={`/client/detail/${clientItem._id}/edit`}
                  className="edit"
                >
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

export default Client;
