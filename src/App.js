import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './Components/Searchbar/SearchBar.jsx';
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx';
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button.jsx';

class App extends Component {
  state = {
    querry: '',
    showModal: false,
    largeImg: null,
    totalHits: null,
    page: 1,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  onImageClick = e => {
    if ((e.target = 'IMG')) {
      this.toggleModal();
    }
    console.dir(e.currentTarget.dataset.src);
    this.setState({ largeImg: e.currentTarget.dataset.src });
  };

  onSearchSubmit = querry => {
    console.log(querry);
    this.setState({
      querry: querry,
    });
  };
  totalHits = totalHits => {
    this.setState({
      totalHits: totalHits,
    });
  };

  onLoadMore = () => {
    console.log('кликнули на onLoadMore');
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <>
        <div className="section">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageGallery
            totalHits={this.totalHits}
            querry={this.state.querry}
            onImageClick={this.onImageClick}
            onLoadMore={this.state.page}
          />
          {this.state.totalHits && <Button onLoadMore={this.onLoadMore} />}
          {this.state.showModal && (
            <Modal onToggleModal={this.toggleModal}>
              <img src={this.state.largeImg} alt={this.state.querry} />
              <button
                className="closeBtn"
                type="button"
                onClick={this.toggleModal}
              >
                X
              </button>
            </Modal>
          )}

          <ToastContainer position="top-center" autoClose={1000} />
        </div>
      </>
    );
  }
}

export default App;
