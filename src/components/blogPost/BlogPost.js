import { useState, useEffect } from 'react';
import { WrapperBlogPost } from './styledBlogPost';

export default function BlogPost({ id, title, body }) {
  //constante referente a imagem do artigo
  const [imagePost, setImagePost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.json())
      .then(json => setImagePost(json));
  }, [id]);

  return (
    <WrapperBlogPost>
      {imagePost && (
        <div>
          <img src={imagePost.thumbnailUrl} alt={imagePost.title} />
        </div>
      )}
      <h1>{title}</h1>
      <p>{body}</p>
    </WrapperBlogPost>
  );
}
