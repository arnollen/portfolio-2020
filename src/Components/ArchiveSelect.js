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
  menu: (provided, state) => ({
    ...provided,
    borderBottom: '0px dotted pink',
    color: 'black',
    padding: 0,
    backgroundColor: 'blue',
    borderRadius: 0,
    marginTop: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '0px',
    color: state.isSelected ? '#2912D6' : 'white',
    backgroundColor: state.isSelected ? '#08ffff' : 'blue',
    borderRadius: 0,
    padding: 20,
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: 'blue',
    color: 'white',
    border: '0px'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
    backgroundColor: 'blue',
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
    options.push({ value: 'ALL', label: 'ALL' });
    for (const [key] of Object.entries(thecontext.projects)) {
      const getType = thecontext.projects[key].type;
      const testType = optionsTest.includes(getType);
      if (!testType) {
        optionsTest.push(getType);
        options.push({ value: getType, label: getType });
      }
    }
  }

  render() {
    const { onChangeValue } = this.props;
    return (
      <div>
        <div id="archive--container">
          <div className="archive--100">
            <Select className="react-select-container" classNamePrefix="react-select" defaultValue={{ label: 'All', value: 'All' }} styles={customStyles} options={options} onChange={onChangeValue} />
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
