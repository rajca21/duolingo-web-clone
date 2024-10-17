import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <BrowserRouter>
      <div data-testid='duolingo'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<Course />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
