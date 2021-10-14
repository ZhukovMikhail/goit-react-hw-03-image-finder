import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem
          querry={this.props.querry}
          onClick={this.props.onImageClick}
          totalHits={this.props.totalHits}
          onResponceLength={this.props.onResponceLength}
          onLoadMore={this.props.onLoadMore}
        />
      </ul>
    );
  }
}
