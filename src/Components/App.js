import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
// import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Searchbar from "./searchbar/Searchbar";

class App extends Component {
  state = {
    pictureName: "",
  };

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureName={this.state.pictureName} />
      </>
    );
  }
}

export default App;
