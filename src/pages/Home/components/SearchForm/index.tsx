import { RepositoriesContext } from '@contexts/Repositories';
import { useContextSelector } from 'use-context-selector';

import * as S from './styles';

export const SearchForm = () => {
  const { repositories, fetchRepositories } = useContextSelector(
    RepositoriesContext,
    (context) => {
      return {
        fetchRepositories: context.fetchRepositories,
        repositories: context.repositories,
      };
    },
  );

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await fetchRepositories(event.target.value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Publicações</S.Title>
        <S.Subtitle>{repositories.length} publicações</S.Subtitle>
      </S.Header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => handleSearch(e)}
      />
    </S.Container>
  );
};
