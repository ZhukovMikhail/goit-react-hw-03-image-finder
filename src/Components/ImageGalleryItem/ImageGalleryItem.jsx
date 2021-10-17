import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    images: [],
    perPage: 12,
    pageNumber: 1,
    totalHits: null,
    loading: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.querry !== this.props.querry ||
      prevState.pageNumber !== this.props.page
    ) {
      if (this.props.page === 1) {
        prevState.images = [];
      }
      this.setState(prevState => ({
        // perPage: prevState.perPage + 12,
        pageNumber: this.props.page,
      }));
      this.setState({ loading: true, error: false });
      this.props.loading(this.state.loading);

      // console.log('change querry');
      // console.log('Prev querry', prevProps.querry);
      // console.log('text of querry', this.props.querry);

      const USER_KEY = '22985243-b477986a48324befacd1d8a65';
      fetch(
        `https://pixabay.com/api/?q=${this.props.querry}&page=${this.state.pageNumber}&key=${USER_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`,
      )
        .then(r => r.json())
        .then(r => {
          this.setState({
            images: [...prevState.images, ...r.hits],
            totalHits: r.totalHits,
          });
          console.log(r);
          console.log(this.state.totalHits);
          this.props.totalHits(this.state.totalHits);
        })
        .catch(error => {
          console.log(error);
          this.setState({
            images: [],
            totalHits: null,
            error: true,
          });
          this.props.totalHits(this.state.totalHits);
        })
        .finally(() => {
          this.setState({ loading: false });
          this.props.loading(this.state.loading);
        });
    }
    if (this.state.pageNumber !== 1 || prevProps.querry === this.props.querry) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return !this.state.error ? (
      this.state.totalHits !== 0 ? (
        this.state.images.map(image => (
          <li className="ImageGalleryItem" key={image.id}>
            <img
              onClick={this.props.onClick}
              src={image.webformatURL}
              data-src={image.largeImageURL}
              alt={image.tags}
              className="ImageGalleryItem-image"
            />
          </li>
        ))
      ) : (
        <h2 className="title"> No match found ...</h2>
      )
    ) : (
      <h2 className="title"> Something goes wrong ... </h2>
    );
  }
}
