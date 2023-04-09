import Logo from '@assets/logo.svg';
import { NavLink } from 'react-router-dom';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <NavLink to="/">
        <img src={Logo} alt="Logo of application" />
      </NavLink>
    </S.Container>
  );
};
