import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme['base-post']};
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid transparent;
  text-decoration: none;

  p {
    font-size: 1rem;
    font-family: Nunito, sans-serif;
    line-height: 160%;
    color: ${({ theme }) => theme['base-text']};
  }


  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
    filter: brightness(0.9);
    transition: filter 0.2s;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-family: Nunito, sans-serif;
  font-weight: 700;
  line-height: 160%;
  color: ${({ theme }) => theme['base-title']};
  max-width: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 660px) {
    font-size: 1rem;
  }

`;

export const SubTitle = styled.time`
  font-size: 0.875rem;
  font-family: Nunito, sans-serif;
  line-height: 160%;
  color: ${({ theme }) => theme['base-span']};

`;
