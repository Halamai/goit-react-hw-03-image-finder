import { Component } from "react";
import Loader from "react-loader-spinner";
import Button from "../button/Button";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    pictures: null,
    loading: false,
    per_page: 12,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "23293427-f7753480c7139e95ecc6333d5";
    if (prevProps.pictureName !== this.props.pictureName) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?q=${this.props.pictureName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.props.per_page}`
      )
        .then((res) => res.json())
        .then((pictures) =>
          this.setState({ pictures: pictures.hits, loading: true })
        )
        .finally(() => {
          this.setState({ loading: false });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }
    if (
      prevProps.pictureName === this.props.pictureName &&
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?q=${this.props.pictureName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.props.per_page}`
      )
        .then((res) => res.json())
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
