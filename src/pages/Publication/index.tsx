import { useCallback, useEffect, useState } from 'react';

import { RepositoriesDTO } from '@dtos/Profile';
import { api } from '@services/api';
import { useNavigate, useParams } from 'react-router-dom';

import { RepositoryCard } from './components/RepositoryCard';
import * as S from './styles';

export const Publication = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repository, setRepository] = useState<RepositoriesDTO>(
    {} as RepositoriesDTO,
  );

  const repositoryId = useParams<{ id: string }>();
  const navigate = useNavigate();

  const getRepository = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/repositories/${repositoryId.id}`);
      setRepository(data);
    } catch {
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  }, [repositoryId.id, navigate]);

  useEffect(() => {
    getRepository();
  }, [getRepository]);

  return (
    <S.Container>
      {!isLoading && (
        <>
          <RepositoryCard repository={repository} />
          <S.Content>
            <p>{repository.description}</p>
          </S.Content>
        </>
      )}
    </S.Container>
  );
};
