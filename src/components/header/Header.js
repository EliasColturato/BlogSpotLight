import { Link } from 'react-router-dom';
import { WrapperHeader, NavButtons, MenuMobile } from './styledHeader';

export default function Header() {
  return (
    <WrapperHeader>
      <h1>Blog Spot Light</h1>
      <NavButtons>
        <Link to={'/'} style={{ textDecoration: 'none', color: '#ffffff' }}>
          <p>Home</p>
        </Link>
        <p>Categorias</p>
        <p>Escritores</p>
        <p>Criar conta</p>
      </NavButtons>
      <MenuMobile>Menu</MenuMobile>
    </WrapperHeader>
  );
}
