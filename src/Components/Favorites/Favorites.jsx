import React from 'react';
import './Favorites.scss';
import { thecontext } from '../Context/Context';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorites: [] };
    this.setState({ favorites: thecontext.favorites });
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps() {
    this.setState({ favorites: thecontext.favorites });
  }

  render() {
    const { favorites } = this.state;
    return (
      <div id="fav-container">
        <h1>My Favories</h1>
        <div id="fav-link-container">
          {
              favorites.length === 0
                ? ''
                : favorites.map((data) => (
                  <div key={data.id}>
                    <div className="fave-link"><p><a href={data[1]} target="_blank" rel="noopener noreferrer ">{data[0]}</a></p></div>
                  </div>
                ))
              }
        </div>
      </div>
    );
  }
}

export default Favorites;