/*eslint-disable*/
import React, { Component } from 'react';
import { fetchAPI } from '../services/API';

export default class AlonePage extends Component {
  state = { country: [] };

  componentDidMount() {
    fetchAPI(this.props.match.params.name).then(response =>
      this.setState({
        country: response,
      }),
    );
  }

  handleBack = () => {
    this.props.history.push('/collections');
  };

  render() {
    const { country } = this.state;
    return (
      <div>
        {country.map(el => (
          <div>
            <img src={el.flag} alt="" style={{ width: 300, height: 300 }} />
            <p>{el.alpha2Code}</p>
            <p>Name:{el.name}</p>
            <p>Native Name:{el.nativeName}</p>
            <p>Capital: {el.capital}</p>
            <p>Population: {el.population}</p>
            <p>Area:{el.area}</p>
            <p>Region: {el.region}</p>
            <p>Subregion: {el.subregion}</p>
            <p>Time zones: {el.timezones[0]}</p>
          </div>
        ))}
        <button type="button" onClick={this.handleBack}>
          back
        </button>
      </div>
    );
  }
}
