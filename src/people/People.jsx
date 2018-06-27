import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {filter} from 'lodash';

class People extends Component {
  static propTypes = {
    peopleList: PropTypes.array,
    filterQuery:PropTypes.string,
  };

  _showPeopleList= () => {
    const { peopleList, filterQuery } = this.props
    const filtredPeoole = filter( peopleList, person => person.name.includes(filterQuery) )
    const peopleListToDisplay = filtredPeoole.map((person) => <div className='App-box' key={person.id}>{person.name}</div>)
    return peopleListToDisplay
  }
  render() {
    return (
      <div>
        {this._showPeopleList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  peopleList: state.people.people,
  filterQuery: state.people.filterQuery
});
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);
