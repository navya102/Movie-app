import React from "react";
import "../App.css";
const SearchBar = () => {
  return (
    <div style={{ height: "70px" }}>
      <div style={{ paddingLeft: "70%" }}>
        <div class="col-md-5 mx-auto">
          <div class="input-group">
            <input
              class="form-control border-end-0 border"
              placeholder="search for a movie"
              id="example-search-input"
              style={{ fontSize: 13 }}
            />
            <span class="input-group-append">
              <button
                class="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
                type="button"
              >
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default SearchBar;
