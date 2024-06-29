import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSliders,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../pages/DeviceTable.css";

export const SearchPagination = () => {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className="table-header">
      <div className="search-filter">
        <div className="input-container">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
        <button className="filter-button">
          <FontAwesomeIcon icon={faSliders} className="filter-icon" />
          Filter
        </button>
      </div>
      <div className="show-entries">
        <span>Show</span>
        <select>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>
      <div className="pagination">
        <button className={`arrow ${activeButton === 1 ? "disabled" : ""}`}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className={activeButton === 1 ? "active" : ""}
          onClick={() => setActiveButton(1)}
        >
          1
        </button>
        <button
          className={activeButton === 2 ? "active" : ""}
          onClick={() => setActiveButton(2)}
        >
          2
        </button>
        <button
          className={activeButton === 3 ? "active" : ""}
          onClick={() => setActiveButton(3)}
        >
          3
        </button>
        <button
          className={activeButton === 4 ? "active" : ""}
          onClick={() => setActiveButton(4)}
        >
          4
        </button>
        <button
          className={activeButton === 5 ? "active" : ""}
          onClick={() => setActiveButton(5)}
        >
          5
        </button>
        <button className={`arrow ${activeButton === 5 ? "disabled" : ""}`}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

// export default SearchPagination;
