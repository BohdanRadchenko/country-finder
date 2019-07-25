/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class ColectionsItem extends Component {
  state = {};

  componentDidMount() {
    // fetchAPI(newName(this.props)).then(console.log);
  }

  render() {
    const { name, match, flag, url } = this.props;
    return (
      <li key={name} style={{ display: 'flax' }}>
        {/* <img src={flag} alt={name} style={{ width: 100, height: 100 }} /> */}
        {/* <Link to={`${match.path}/${name}`}>{name}</Link> */}
        <Link to={`/collections/${name}`}>
          <img src={flag} alt={name} style={{ width: 100, height: 100 }} />
          <p>{name}</p>
        </Link>
      </li>
    );
  }
}

export default withRouter(ColectionsItem);
