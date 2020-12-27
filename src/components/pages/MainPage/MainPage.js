import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MainPage(props) {
  return (
    <div>
      mainPage
      <div>
        <button>
          <Link to="/second">routing test</Link>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
