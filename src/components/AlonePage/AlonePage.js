/*eslint-disable*/
import React, { Component } from 'react';
import { fetchAPI } from '../services/API';

class AlonePage extends Component {
  state = {
    country: [],
  };

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
    console.log(country);
    return (
      <div>
        {country.map(el => (
          <li key={`${el.name}+${el.flag}`}>
            <img
              src={el.flag}
              style={{ width: 300, heigth: 300, border: '1px solid gray' }}
            />
            <p>{el.alpha2Code}</p>
            <p>{el.alpha3Code}</p>
            <p>{el.name}</p>
            <p>{el.nativeName}</p>
            <p>{el.capital}</p>
            <p>{el.population}</p>
            <p>{el.languages[0]}</p>
            <p>{el.area}</p>
            <p>{el.region}</p>
            <p>{el.subregion}</p>
            <p>{el.timezones[0]}</p>
          </li>
        ))}
        <button type="button" onClick={this.handleBack}>
          back
        </button>
      </div>
    );
  }
}

export default AlonePage;
