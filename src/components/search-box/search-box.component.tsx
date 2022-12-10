/** @format */
import React, { ChangeEvent } from "react";

// import { Component } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

// const SearchBox = ({ className, placeholder, onChangeHandler }) => {
//   return (
//     <input
//       className={`search-box ${className}`}
//       type="search"
//       placeholder={placeholder}
//       onChange={onChangeHandler}
//     />
//   );
// };

// class SearchBox extends Component {
//     render() {
//         const { onChangeHandler, placeholder, className } = this.props;

//         return <input
//             className={`search-box ${className}`}
//             type='search'
//             placeholder={placeholder}
//             onChange={onChangeHandler}
//         />
//     }
// }

export default SearchBox;
