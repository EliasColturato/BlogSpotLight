import { useEffect, useState } from 'react';

//Components
import Header from '../../components/header/Header';
import BlogPost from '../../components/blogPost/BlogPost';

//Estilo
import { RowBlogPosts } from './styledHome';
import Pagination from '../../components/pagination/Pagination';

export default function Home() {
  //constante referente ao artigo
  const [blogPost, setBlogPost] = useState([]);

  //constantes de paginação
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => setBlogPost(json));
  }, []);

  //funções de paginação
  const nextPage = () => {
    setEndIndex(prev => prev + 20);
    setStartIndex(prev => prev + 20);
  };

  const previousPage = () => {
    setEndIndex(prev => prev - 20);
    setStartIndex(prev => prev - 20);
  };

  return (
    <>
      <Header />
      <Pagination
        nextFunction={nextPage}
        previousFunction={previousPage}
        endIndex={endIndex}
      />
      <RowBlogPosts>
        {blogPost.slice(startIndex, endIndex).map(post => {
          return (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </RowBlogPosts>
    </>
  );
}
