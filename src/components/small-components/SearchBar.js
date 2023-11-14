import React from 'react'
import "../componentsCSS/SearchBar.css"
function SearchBar(props) {
  return (
    <>
    <div className={`search-bar-generic-${props.mode}`}>
          <div className={`bar-generic-${props.mode}`}>Search here.</div>
        </div>
    </>
  )
}

export default SearchBar;
SearchBar.defaultProps = {
    mode: "transparent",
}