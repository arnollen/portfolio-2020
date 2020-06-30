/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Select from 'react-select';
import { thecontext } from './Context';
import '../Styles/Archive.scss';

const options = [
];

const optionsTest = [
];

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
          <div className="archive--50 archive--left">
            <p>select archive type</p>
          </div>
          <div className="archive--50 archive--left">
            <Select defaultValue={{ label: 'All', value: 0 }} options={options} onChange={onChangeValue} />
          </div>
        </div>
      </div>
    );
  }
}

export default ArchiveSelect;