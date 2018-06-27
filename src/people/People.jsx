import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filter } from 'lodash';

class People extends Component {
  static propTypes = {
    peopleList: PropTypes.array,
    filterQuery: PropTypes.string,
  };

  _showPeopleList = () => {
    const { peopleList, filterQuery } = this.props
    const pattern = new RegExp(filterQuery, 'i')
    const filtredPeople = filter(peopleList, person => pattern.test(person.name))
    return filtredPeople.map((person) => (
      <div className='App-box' key={person.id}>{person.name}</div>
    ))
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

export default connect(mapStateToProps)(People);
