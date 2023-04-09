import { ProfileCard } from '@components/ProfileCard';
import { SearchForm } from '@components/SearchForm';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <ProfileCard />
      <SearchForm />
    </S.Container>
  );
};
