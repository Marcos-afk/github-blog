/* eslint-disable no-unused-vars */
import { ProfileDTO, RepositoriesDTO } from '@dtos/Profile';

export interface RepositoriesContextProps {
  profile: ProfileDTO;
  repositories: RepositoriesDTO[];
  fetchRepositories: (query?: string) => Promise<void>;
}

export interface RepositoriesProviderProps {
  children: React.ReactNode;
}
