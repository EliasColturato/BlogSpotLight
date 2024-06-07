import styled from 'styled-components';

export const WrapperPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  column-gap: 2rem;
  justify-content: center;
`;

export const PostBody = styled.div`
  width: 350px;
  padding: 2rem;
  img {
    width: 100%;
  }
`;

export const CommentColumn = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
`;
