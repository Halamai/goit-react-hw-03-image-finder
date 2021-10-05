import { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    picture: "",
  };

  inputChange = (e) => {
    this.setState({ picture: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // if (this.state.picture.trim() === "") {
    //   alert("enter a search word");
    //   return;
    // }
    this.props.onSubmit(this.state.picture);
    // this.setState({ picture: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_labe}>Search</span>
          </button>

          <input
            onChange={this.inputChange}
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
