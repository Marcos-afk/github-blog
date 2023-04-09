import { RepositoriesContext } from '@contexts/Repositories';
import { ProfileCard } from '@pages/Home/components/ProfileCard';
import { RepositoryCard } from '@pages/Home/components/RepositoryCard';
import { SearchForm } from '@pages/Home/components/SearchForm';
import { useContextSelector } from 'use-context-selector';

import * as S from './styles';

export const Home = () => {
  const { repositories } = useContextSelector(
    RepositoriesContext,
    (context) => {
      return {
        repositories: context.repositories,
      };
    },
  );

  return (
    <S.Container>
      <ProfileCard />
      <SearchForm />
      <S.Repositories>
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </S.Repositories>
    </S.Container>
  );
};
