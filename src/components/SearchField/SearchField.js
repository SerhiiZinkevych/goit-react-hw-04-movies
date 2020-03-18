// Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import _ from 'lodash';
// Styles
import styles from './SearchField.module.css';

class SearchField extends Component {
  state = { query: '' };

  debouncedValueUpdate = _.debounce(
    value =>
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: value ? `query=${value}` : '',
      }),
    500,
  );

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      this.setState({ query });
    }
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
    this.debouncedValueUpdate(value);
  };

  render() {
    const { query } = this.state;
    return (
      <div className={styles.wrapper}>
        <span
          className={styles.magnifyingGlass}
          role="img"
          aria-label="magnifyingGlass"
        >
          🔍
        </span>
        <input
          className={styles.searchField}
          placeholder="Type movie title here..."
          type="text"
          value={query}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default withRouter(SearchField);
