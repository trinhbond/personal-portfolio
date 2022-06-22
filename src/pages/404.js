import React from 'react';
import "../styles/404.css";

function NoSuchPage() {
  document.title = "404";
  return (
  <div className="Error">
    <p>This page does not exist</p>
  </div>
  )
}

export default NoSuchPage;