import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  background: ${({ theme }) => theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -6rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);


  @media (max-width: 560px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: Nunito, sans-serif;
    line-height: 195%;
    color: ${({ theme }) => theme['base-title']};

    @media (max-width: 425px) {
      font-size: 1.25rem;
    }
  }

  a{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 120%;
    cursor: pointer;

    &:hover{
      text-decoration: underline;
    }
  }


`;

export const ProfileImage = styled.img`
    width: 10rem;
    border-radius: 8px;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  padding: 0 0.5rem;
  font-family: Nunito, sans-serif;
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.625rem;

  @media (max-width: 560px) {
    justify-content: space-between;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 160%;
  font-family: Nunito, sans-serif;
  color: ${({ theme }) => theme['base-subtitle']};


  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`;
