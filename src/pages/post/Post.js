import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Comment from '../../components/comments/Comments';
import { CommentColumn, PostBody, WrapperPost } from './styledPost';

export default function Post() {
  const { id } = useParams();

  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState({});

  //Trazendo o post completo por query
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json));
  }, [id]);

  //Adicionando e filtrando os comentários
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(json => {
        const filteredComments = json.filter(
          comments => comments.postId === parseInt(id)
        );
        setComments(filteredComments);
      });
  }, [id]);

  //Adicionando imagem do post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.json())
      .then(json => setImage(json));
  }, [id]);

  return (
    <>
      <Header />
      <WrapperPost>
        <PostBody>
          <img
            src={image.url}
            alt="Aqui estaria a minha imagem... SE EU TIVESSE UMA!"
            style={{ backgroundColor: 'red', borderRadius: '16px' }}
          />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </PostBody>
        <CommentColumn>
          <div>
            <h1>Comentários</h1>
          </div>
          {comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            );
          })}
        </CommentColumn>
      </WrapperPost>
    </>
  );
}
