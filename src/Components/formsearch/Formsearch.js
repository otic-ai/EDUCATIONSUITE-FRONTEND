import React from "react";
import "./Formsearch.css";

const Formsearch = () => {
  return (
    <>
      <form className="contentform">
        <div>
          <input className="content_search" type="text" placeholder="search" />
        </div>
        <div>
          <button type="submit" className="button">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Formsearch;
