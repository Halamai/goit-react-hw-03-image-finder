import { Component } from "react";
import { apiService } from "../../services/api.js";
import Loader from "react-loader-spinner";
import Button from "../button/Button";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    pictures: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      this.setState({ loading: true });
      apiService(this.props.pictureName, this.state.page)
        .then((pictures) =>
          this.setState({ pictures: pictures.hits, loading: true })
        )
        .finally(() => {
          this.setState({ loading: false });
        });
    }
    if (
      prevProps.pictureName === this.props.pictureName &&
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });
      apiService(this.props.pictureName, this.state.page)
        .then((pictures) =>
          this.setState((prev) => ({
            pictures: [...prev.pictures, ...pictures.hits],
            loading: true,
          }))
        )
        .finally(() => {
          this.setState({ loading: false });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }
  }

  onHandleonClick = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <ul className={s.ImageGallery}>
          {this.state.pictures && (
            <ImageGalleryItem pictures={this.state.pictures} />
          )}
        </ul>
        <Button onHandleonClick={this.onHandleonClick} />
      </>
    );
  }
}
export default ImageGallery;
