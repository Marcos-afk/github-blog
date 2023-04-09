export interface RepositoriesDTO {
  id: number;
  description: string;
  name: string;
  url: string;
  comments: number;
  created_at: string;
}

export interface ProfileDTO {
  name: string;
  github_url: string;
  avatar_url: string;
  followers: number;
  github_username: string;
  company: string;
  description: string;
}
