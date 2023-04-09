import Arrow from '@assets/arrow-icon.svg';
import Back from '@assets/back.svg';
import Calendar from '@assets/calendar.svg';
import Git from '@assets/git-icon.svg';
import Message from '@assets/message.svg';
import { RepositoriesContext } from '@contexts/Repositories';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NavLink } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { RepositoryCardProps } from './RepositoryCardProps';
import * as S from './styles';

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const { profile } = useContextSelector(RepositoriesContext, (context) => {
    return {
      profile: context.profile,
    };
  });

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(repository.created_at),
    {
      locale: ptBR,
      addSuffix: true,
    },
  );

  return (
    <S.Container>
      <S.Header>
        <NavLink to="/">
          <img src={Back} alt="Icon of back to home page" />
          Voltar
        </NavLink>
        <a href={profile.github_url} target="_blank" rel="noreferrer">
          Ver no Github
          <img src={Arrow} alt="Icon of arrow" />
        </a>
      </S.Header>
      <S.Title>{repository.name}</S.Title>
      <S.IconsContainer>
        <S.Icon>
          <img src={Git} alt="GitHub icon" />
          {profile.github_username}
        </S.Icon>
        <S.Icon>
          <img src={Calendar} alt="Company icon" />

          {publishedDateRelativeToNow}
        </S.Icon>
        <S.Icon>
          <img src={Message} alt="Followers icon" />
          {5} comentários
        </S.Icon>
      </S.IconsContainer>
    </S.Container>
  );
};
