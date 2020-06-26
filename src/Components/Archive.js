/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import gsap, { Linear } from 'gsap';
import '../Styles/Archive.scss';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = { archive: [] };
  }

  componentDidMount = () => {
    fetch('./Data/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ archive: data.projects });
        this.transitionIn();
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`Error Reading data ${err}`);
      });
  }

  transitionIn = () => {
    gsap.staggerTo('.project--single', 0.3, {
      opacity: 1,
      ease: Linear.EaseIn,
    }, 0.2);
  }

  render() {
    const { archive } = this.state;
    return (
      <div>
        <div id="archive--single--pin" />
        <div id="archive--hide">
          {
            archive.length === 0
              ? ''
              : archive.slice(5, archive.length).map((clients) => (
                  <div key={clients.id} className="archive--single">
                    <div>
                      <div className="archive--container">
                      {/* <div className="header--boarder" /> */}
                        <div className="archive--details">
                          <div className="count--container">
                            <div className="archive--count"><p>{clients.id + 1}</p></div>
                          </div>
                          <div className="copy--container">
                            <div className="archive--type"><h3>{clients.type}</h3></div>
                            <div className="archive--header"><h1>{parse(clients.name)}</h1></div>
                            <div className="archive--paragraph"><p>{parse(clients.description)}</p></div>
                          </div>
                          <div className="link--container">
                            <div className="archive--link">
                              <Link to={clients.route.path} data={clients}>VIEW</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))
            }
        </div>
      </div>
    );
  }
}


export default Archive;
