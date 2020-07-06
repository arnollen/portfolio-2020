/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/Footer.scss';
import '../Styles/Detail.scss';

class FooterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      prev,
      next,
      thedata,
    } = this.props;

    return (
      <div id="footer-detail">
        <div id="detail--separator-navigation--bottom">
          <div id="separator--container--bottom">
            <div id="prev--top--bottom">
              <div id="prev--link--bottom">
                <Link to={prev} data={thedata} className="view--project--prev">prev</Link>
              </div>
            </div>

            <ScrollLink className="scroll-to-link" activeClass="active" to="top-scroll-to" spy smooth="easeInOutCubic" duration={1000}>
              ^
            </ScrollLink>

            <div id="next--top--bottom">
              <div id="next--link--bottom">
                <Link to={next} data={thedata} className="view--project--next">next</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FooterDetail.propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  thedata: PropTypes.func.isRequired,
};

export default FooterDetail;
