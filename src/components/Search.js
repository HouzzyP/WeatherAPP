import React from "react";

export const Search = (props) => {
  const { search, setSearch, getInfo } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    getInfo(search);
    setSearch("");
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className="container-search">
      <form onSubmit={onSubmit} className="form-search">
        <input
          className="input-search"
          placeholder="Search location..."
          onChange={onChange}
          value={search}
        />
      </form>
    </div>
  );
};
