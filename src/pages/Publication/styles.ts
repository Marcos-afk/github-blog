import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const Content = styled.div`
  margin-top: 2.5rem;

 p {
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme['base-text']};
    font-weight: 700;
    font-family: Nunito, sans-serif;
  }
`;
