import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { getTerms } from 'utils/fetchApi';
import Brands from './Brands';

export default function Terms() {
  const [terms, setTerms] = useState([]);
  const params = useParams();

  const res = async () => await getTerms();

  useEffect(() => {
    res().then(el => setTerms(el));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      }}
    >
      <ul>
        {terms.map(term => {
          return (
            <li key={term.id}>
              <Link to={`s-${term.slug}`}>{term.label}</Link>
            </li>
          );
        })}
      </ul>
      {params.service_slug && (
        <Routes>
          <Route path=":service_slug/*" element={<Brands />}></Route>
        </Routes>
      )}
    </div>
  );
}
