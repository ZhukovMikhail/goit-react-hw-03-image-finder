import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    querry: [],
    perPage: 12,
    pageNumber: 1,
    respLength: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.querry !== this.props.querry ||
      prevState.pageNumber !== this.props.onLoadMore
    ) {
      console.log('change querry');
      console.log('Prev querry', prevProps.querry);
      console.log('text of querry', this.props.querry);
      const USER_KEY = '22985243-b477986a48324befacd1d8a65';
      fetch(
        `https://pixabay.com/api/?q=${this.props.querry}&page=${this.state.pageNumber}&key=${USER_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`,
      )
        .then(r => r.json())
        .then(r => {
          this.setState({
            querry: r.hits,
            respLength: r.hits.length,
          });
          console.log(this.state.respLength);
          this.props.resplength(this.state.respLength);
        });
    }
    if (this.props.onLoadMore !== this.state.pageNumber) {
      this.setState(prev => ({
        perPage: prev.perPage + 12,
        pageNumber: prev.pageNumber + 1,
      }));
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  render() {
    return this.state.querry.map(q => (
      <li className="ImageGalleryItem" key={q.id}>
        <img
          onClick={this.props.onClick}
          src={q.webformatURL}
          data-src={q.largeImageURL}
          alt={q.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    ));
  }
}
