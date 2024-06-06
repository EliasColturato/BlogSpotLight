import styled from 'styled-components';

export const WrapperBlogPost = styled.div`
  width: 150px;
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    font-size: 16px;
  }
  h1::first-letter {
    text-transform: uppercase;
  }
  p {
    font-size: 12px;
  }
`;
