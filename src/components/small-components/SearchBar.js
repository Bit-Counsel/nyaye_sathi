import React from 'react'

function SearchBar(props) {
  return (
    <>
    <div className={`fixed search-Bar-${props.mode}`}>
          <div className={`bar-${props.mode}`}>Search here.</div>
        </div>
    </>
  )
}

export default SearchBar;
SearchBar.defaultProps = {
    mode: "transparent",
}