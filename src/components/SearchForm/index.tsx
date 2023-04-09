import * as S from './styles';

export const SearchForm = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Publicações</S.Title>
        <S.Subtitle>{6} publicações</S.Subtitle>
      </S.Header>
      <input type="text" placeholder="Buscar conteúdo" />
    </S.Container>
  );
};
