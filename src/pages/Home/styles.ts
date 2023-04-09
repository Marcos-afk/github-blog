import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const Repositories = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;
