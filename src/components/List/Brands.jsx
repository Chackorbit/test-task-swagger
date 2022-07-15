import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { getBrands } from 'utils/fetchApi';
import Styles from './Styles';

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const params = useParams();

  const res = async () => await getBrands();

  useEffect(() => {
    res().then(el => setBrands(el));
  }, []);
  return (
    <>
      <ul>
        {brands.map(brand => {
          return (
            <li key={brand.id}>
              <Link to={`b-${brand.slug}`}>{brand.label}</Link>
            </li>
          );
        })}
      </ul>

      {params.brand_slug && (
        <Routes>
          <Route path=":brand_slug/*" element={<Styles />} />
        </Routes>
      )}
    </>
  );
}
