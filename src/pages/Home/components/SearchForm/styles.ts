import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 0.75rem;
  padding-bottom:  1rem;

  input {
    flex: 1;
    border: 0;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
      font-size: 1rem;
      font-family: Nunito, sans-serif;
      line-height: 160%;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 160%;
  font-family: Nunito, sans-serif;
  color: ${({ theme }) => theme['base-subtitle']}

`;

export const Subtitle = styled.span`
  font-size: 0.875rem;
  line-height: 160%;
  font-family: Nunito, sans-serif;
  color: ${({ theme }) => theme['base-span']};
`;
