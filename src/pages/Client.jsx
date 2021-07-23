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
                <p>
                  <Link to={`/client/detail/${clientItem._id}`}>
                    Ver información
                  </Link>
                </p>
                <Link to={`/client/detail/${clientItem._id}/edit`}>
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
