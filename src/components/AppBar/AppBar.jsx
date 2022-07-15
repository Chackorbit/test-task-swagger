import { Link } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
          }}
        >
          <li>
            <Link to={'/'}>Послуги</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
