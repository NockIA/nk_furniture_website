import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Views/homePage';

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
