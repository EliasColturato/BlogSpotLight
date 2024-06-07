import { WrapperHeader, NavButtons } from './styledHeader';

export default function Header() {
  return (
    <WrapperHeader>
      <h1>Blog Spot Light</h1>
      <NavButtons>
        <p>Home</p>
        <p>Categorias</p>
        <p>Escritores</p>
        <p>Criar conta</p>
      </NavButtons>
    </WrapperHeader>
  );
}
