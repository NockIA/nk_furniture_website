import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/app/App';

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
