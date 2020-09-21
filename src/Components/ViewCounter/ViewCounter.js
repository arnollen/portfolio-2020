/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ViewCounter.scss';
import { ProjectCount } from '../Context/Context';
import burst from '../svg/burst.svg';

class ViewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  componentWillUnmount = () => {

  }

  render() {
    const { valuemax } = this.props;
    return (
      <div>
        <div id="viewcounter-container">
          <img src={burst} className="burst" alt="burst" />
          <div>
            <p>Projects Viewed:</p>
            <ProjectCount.Consumer>
              {(value) => (
                <h1>
                  { value }
                  |
                  { valuemax }
                </h1>
              )}
            </ProjectCount.Consumer>
          </div>
        </div>
      </div>
    );
  }
}

ViewCounter.contextType = ProjectCount;

ViewCounter.propTypes = {
  valuemax: PropTypes.number.isRequired,
};

export default ViewCounter;
