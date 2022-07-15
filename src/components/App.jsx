import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Brands from './List/Brands';
import Styles from './List/Styles';
import Terms from './List/Terms';

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Terms />}>
          <Route path=":service_slug" element={<Brands />}>
            <Route path=":brand_slug" element={<Styles />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
