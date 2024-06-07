import { WrapperComment } from './styledComments';

export default function Comment({ name, email, body }) {
  return (
    <WrapperComment>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{body}</p>
    </WrapperComment>
  );
}
