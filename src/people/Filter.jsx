import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setFilterQuery} from '../actions/people';

class Filter extends Component {
 
  _setFilterQuery = (e) => {
    this.props.setFilterQuery(e.target.value)
  }

  render() {
    return (
      <div className='App-box'>
      <input type='text' placeholder='Filter' onChange={this._setFilterQuery}/>
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setFilterQuery
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
