/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { thecontext } from './Context';
import '../Styles/Archive.scss';

const options = [

];

const optionsTest = [
];

const customStyles = ({
  menu: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'red',
    borderRadius: 0,
    marginTop: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '0px',
    color: state.isSelected ? 'white' : 'white',
    backgroundColor: state.isSelected ? 'rgb(202, 2, 2)' : 'red',
    borderRadius: 0,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '600',
    fontSize: '18px',
    '&:hover': { backgroundColor: 'rgb(202, 2, 2)' }, // border style on hover
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: 'red',
    color: 'white',
    border: '0px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
    backgroundColor: 'red',
    fontWeight: '600',
    fontSize: '21px',
    paddingLeft: '0px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'white',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'white',
    '&:hover': { color: 'white' }, // border style on hover
  }),
});

class ArchiveSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.setSelectOptions();
  }

  componentWillUnmount = () => {

  }

  change = (event) => {
    thecontext.projectType = event.value;
  }

  setSelectOptions = () => {
    options.push({ value: 'ALL', label: 'VIEW ALL' });
    for (const [key] of Object.entries(thecontext.projects)) {
      const getType = thecontext.projects[key].type;
      const testType = optionsTest.includes(getType);
      if (!testType) {
        optionsTest.push(getType);
        options.push({ value: getType, label: `VIEW ${getType}` });
      }
    }
  }

  render() {
    const { onChangeValue } = this.props;
    return (
      <div>
        <div id="archive--container">
          <div className="archive--100">
            <Select isSearchable={ false } className="react-select-container" classNamePrefix="react-select" defaultValue={{ label: 'All', value: 'All' }} styles={customStyles} options={options} onChange={onChangeValue} />
          </div>
        </div>
      </div>
    );
  }
}

ArchiveSelect.propTypes = {
  onChangeValue: PropTypes.string.isRequired,
};

export default ArchiveSelect;
