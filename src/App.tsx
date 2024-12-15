import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/not-found';
import BinaryGap from './pages/binary-gap';
import { ArrayCyclicRotation } from './pages/array-cyclic-rotation';
import { ArrayUnpairedElement } from './pages/array-unpaired-element';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/binary-gap">Binary gap</Link>
          </li>
          <li>
            <Link to="/array-cyclic-rotation">Array cyclic rotation</Link>
          </li>
          <li>
            <Link to="/array-unpaired-element">Array unpaired element</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/binary-gap" element={<BinaryGap />} />
        <Route
          path="/array-cyclic-rotation"
          element={<ArrayCyclicRotation />}
        />
        <Route
          path="/array-unpaired-element"
          element={<ArrayUnpairedElement />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
