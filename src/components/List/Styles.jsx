import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { getStyles, parseLink } from 'utils/fetchApi';

export default function Styles() {
  const [styles, setStyles] = useState([]);
  const params = useParams();
  console.log('params: ', params);

  const res = async () => await getStyles();

  useEffect(() => {
    res().then(el => setStyles(el));
  }, []);

  parseLink(params.service_slug, params.brand_slug, params.style_slug);

  return (
    <>
      <ul>
        {styles.map(style => {
          return (
            <li key={style.id}>
              <Link to={`st-${style.slug}`}>{style.label}</Link>
            </li>
          );
        })}
      </ul>

      {params.brand_slug && (
        <Routes>
          <Route path=":style_slug" element={<Styles />} />
        </Routes>
      )}
    </>
  );
}
