import { ProfileCard } from '@components/ProfileCard';
import { RepositoryCard } from '@components/RepositoryCard';
import { SearchForm } from '@components/SearchForm';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <ProfileCard />
      <SearchForm />
      <S.Repositories>
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </S.Repositories>
    </S.Container>
  );
};
