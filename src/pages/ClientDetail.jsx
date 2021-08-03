import React, { Component } from "react";
import { Link } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { FaPen } from "react-icons/fa";
import Loading from "../components/Loading";
import getData from "../utils/getData";
import config from "../config";
import Header from "../components/Header";
import "../styles/pages/ClientDetail.scss";

class ClientDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "",
      loading: false,
      error: null,
      client: "",
    };
  }

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    try {
      const client = await getData(
        `${config.api}/api/client/${this.props.match.params.id}`
      );
      if (client) {
        const deltaOps = JSON.parse(client.data.body.detail);

        const cfg = {
          encodeHtml: true,
        };

        const converter = new QuillDeltaToHtmlConverter(deltaOps.ops, cfg);

        const html = converter.convert();

        this.setState({
          ...this.state,
          loading: false,
          html: html,
          client: client.data.body.name,
        });
      }
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  }

  render() {
    return (
      <>
        <Header page="Clientes" />
        <section className="clientDetail">
          <div className="clientDetail__title">
            <h3>INFORMACIÓN DEL CLIENTE</h3>
          </div>
          <div className="clientDetail__client-container">
            <p>{this.state.client}</p>
            <Link to={`/client/detail/${this.props.match.params.id}/edit`}>
              <FaPen />
              <span>Editar cliente</span>
            </Link>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.html }}
            className="clientDetail__item"
          ></div>
        </section>
        {this.state.loading && <Loading />}
      </>
    );
  }
}

export default ClientDetail;
