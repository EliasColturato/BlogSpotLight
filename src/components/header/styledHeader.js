import styled from 'styled-components';

export const WrapperHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: #303030;
  color: #fff;
  align-items: center;
`;

export const NavButtons = styled.div`
  display: flex;
  column-gap: 4rem;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    column-gap: 4rem;
  }
`;

export const MenuMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
