/* eslint-disable quotes */
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { RepositoryCardProps } from './RepositoryCardProps';
import * as S from './styles';

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const publishedDateFormat = format(
    new Date(repository.created_at),
    "d 'de' LLLL 'às' hh:mm'h' ",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(repository.created_at),
    {
      locale: ptBR,
      addSuffix: true,
    },
  );

  return (
    <S.Container to={`/publication/${repository.id}`}>
      <S.Header>
        <S.Title>{repository.name}</S.Title>
        <S.SubTitle
          title={publishedDateFormat}
          dateTime={repository.created_at}
        >
          {publishedDateRelativeToNow}
        </S.SubTitle>
      </S.Header>
      <p>{repository.description}</p>
    </S.Container>
  );
};
