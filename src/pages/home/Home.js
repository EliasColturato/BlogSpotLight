import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';

export default function Home() {
  //constante referente ao artigo
  const [blogPost, setBlogPost] = useState([]);
  //constante referente a imagem do artigo
  const [imagePost, setImagePost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => setBlogPost(json));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(json => setImagePost(json));
  }, []);

  return (
    <>
      <Header />
      <h1>My home page.</h1>
      {blogPost.map(posts => {
        return (
          <div key={posts.id}>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
          </div>
        );
      })}
    </>
  );
}
