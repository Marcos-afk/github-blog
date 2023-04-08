import Arrow from '@assets/arrow-icon.svg';
import Company from '@assets/company-icon.svg';
import Followers from '@assets/followers-icon.svg';
import Git from '@assets/git-icon.svg';

import { Profile } from './mock';
import * as S from './styles';

export const ProfileCard = () => {
  return (
    <S.Container>
      <S.ProfileImage
        src={Profile.avatar_url}
        alt="Avatar file of Marcos-afk "
      />
      <S.InfoContainer>
        <S.NameContainer>
          <span>{Profile.name}</span>
          <a href={Profile.github_url} target="_blank" rel="noreferrer">
            Github
            <img src={Arrow} alt="Icon of arrow" />
          </a>
        </S.NameContainer>
        <S.ProfileDescription>{Profile.Description}</S.ProfileDescription>
        <S.IconsContainer>
          <S.Icon>
            <img src={Git} alt="GitHub icon" />
            {Profile.github_username}
          </S.Icon>
          <S.Icon>
            <img src={Company} alt="Company icon" />
            {Profile.Company}
          </S.Icon>
          <S.Icon>
            <img src={Followers} alt="Followers icon" />
            {Profile.followers}
          </S.Icon>
        </S.IconsContainer>
      </S.InfoContainer>
    </S.Container>
  );
};
