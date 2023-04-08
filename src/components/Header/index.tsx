import Logo from '@assets/logo.svg';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <img src={Logo} alt="Logo of application" />
    </S.Container>
  );
};
