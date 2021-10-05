import React, { Component } from "react";
import Modal from "../modal/Modal";
import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImageURL: "",
  };

  toggleModale = (largeImageURL) => {
    this.setState((prevState) => ({
      largeImageURL: largeImageURL,
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModale}
            largeImageURL={this.state.largeImageURL}
          />
        )}

        {this.props.pictures.map((hit) => {
          const togglePictere = () => this.toggleModale(hit.largeImageURL);

          return (
            <li key={hit.id} className={s.ImageGalleryItem}>
              <img
                src={hit.webformatURL}
                alt=""
                id={hit.largeImageURL}
                className={s.ImageGalleryItem_image}
                onClick={togglePictere}
              />
            </li>
          );
        })}
      </>
    );
  }
}
export default ImageGalleryItem;
