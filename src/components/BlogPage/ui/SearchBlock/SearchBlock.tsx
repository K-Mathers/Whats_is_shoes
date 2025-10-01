import MagnifyingGlassSVG from "../../../../assets/SearchBlockAssets/MagnifyingGlassSVG";
import "./SearchBlock.css";

const SearchBlock = () => {
  return (
    <div className="search-block">
      <input placeholder="SEARCH" className="search-block-input" type="text" />
      <button className="search-button">
        <MagnifyingGlassSVG className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBlock;
