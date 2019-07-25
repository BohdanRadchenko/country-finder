/*eslint-disable*/

import React, { Component } from 'react';
import { fetchAPI, startAPI } from '../services/API';
import ColectionsItem from '../ColectionsItem/ColectionsItem';

class Collection extends Component {
  state = {
    search: '',
    value: '',
    info: [],
  };

  componentDidMount() {
    // startAPI().then(response =>
    //   this.setState({
    //     info: response,
    //   }),
    // );
  }

  setSearch = e => {
    const { value } = this.state;
    e.preventDefault();
    fetchAPI(value).then(response =>
      this.setState({
        info: response,
      }),
    );
    // this.setState({
    //   search: value,
    // });
    this.reset();
  };

  getValue = event => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { search, value, info } = this.state;
    return (
      <>
        <form onSubmit={this.setSearch}>
          <input type="text" onChange={this.getValue} value={value} />
        </form>
        <p>Collections</p>
        <ul>
          {info.map(el => (
            <ColectionsItem {...el} />
          ))}
        </ul>
      </>
    );
  }
}

export default Collection;
