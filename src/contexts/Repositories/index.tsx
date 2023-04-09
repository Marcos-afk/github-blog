import { useCallback, useEffect, useState } from 'react';

import { ProfileDTO, RepositoriesDTO } from '@dtos/Profile';
import { api } from '@services/api';
import { createContext } from 'use-context-selector';

import {
  RepositoriesContextProps,
  RepositoriesProviderProps,
} from './RepositoriesProps';

export const RepositoriesContext = createContext(
  {} as RepositoriesContextProps,
);

export const RepositoriesProvider = ({
  children,
}: RepositoriesProviderProps) => {
  const [profile, setProfile] = useState<ProfileDTO>({} as ProfileDTO);
  const [repositories, setRepositories] = useState<RepositoriesDTO[]>([]);

  const fetchProfile = useCallback(async () => {
    const { data } = await api.get('/profile');
    setProfile(data);
  }, []);

  const fetchRepositories = useCallback(async (query?: string) => {
    const { data } = await api.get('/repositories', {
      params: { q: query, _sort: 'created_at', _order: 'desc' },
    });
    setRepositories(data);
  }, []);

  useEffect(() => {
    fetchProfile();
    fetchRepositories();
  }, [fetchProfile, fetchRepositories]);

  return (
    <RepositoriesContext.Provider
      value={{
        profile,
        repositories,
        fetchRepositories,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};
