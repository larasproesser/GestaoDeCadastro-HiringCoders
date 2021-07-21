import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../Botoes';
import { ButtonContainer, Container, Description, Title } from './styled';


export default function Home() {
  return (
    <Container>
      <Title>Gestão de Cadastros</Title>
      <Description>Sistema para gestão de cadastros.</Description> <br />
      <hp>Clique em "Clientes" ou em "Produtos" para adicionar informações na base de dados.</hp> <br />
      <ButtonContainer>
        <NavLink to='/clientes'><Button backColor='#117BB0'>Clientes</Button></NavLink>
        <NavLink to='/produtos'><Button backColor='#FD5A57'>Produtos</Button></NavLink>
      </ButtonContainer>
    </Container>
  )
}