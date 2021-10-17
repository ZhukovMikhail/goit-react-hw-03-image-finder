import React, { Component } from 'react';

export default class fetchQuerry extends Component {
  // const USER_KEY = '22985243-b477986a48324befacd1d8a65';
  // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searhcQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${USER_KEY}`;
  //pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

  render() {
    return (
      <div>
        <h1>FetchQuerry</h1>
        <p>{this.props.querry}</p>
      </div>
    );
  }
}
