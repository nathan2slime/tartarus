import { NotFoundWrapper } from './styles';

import notfound from '../../global/assets/notfound.png';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <NotFoundWrapper>
    <img src={notfound} />

    <p>Nothing around here</p>
    <Link to="/">Back to home page</Link>
  </NotFoundWrapper>
);

export default NotFound;
