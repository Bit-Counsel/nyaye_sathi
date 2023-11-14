import React from 'react';
import "../componentsCSS/test.css";

function test() {
  return (
    <>
    fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    // Access the user data from the response
    const user = data.results[0];
    console.log(user);
  })
  .catch(error => console.error('Error fetching random user:', error));
    </>
  )
}

export default test