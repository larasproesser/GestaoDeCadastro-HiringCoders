import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ButtonContainer,
  DataForm,
  Form,
  FormatedInput,
  Input,
  Label,
  ModifiedButton,
} from "../Clientes/styled";
import { Container, Description, Title } from "../Principal/styled";
import { Success, TextArea } from "./styled";

export default function Products() {
  const [status, setStatus] = useState(false);
  const [productData, setproductData] = useState({
    code:"",
    product: "",
    description: "",
    price: "",
    stock: "",
  });

  function handleChange(e) {
    const field = e.target.getAttribute("id");
    const value = e.target.value;

    setproductData({
      ...productData,
      [field]: value,
    });
  }

  function setDataToStorage(e) {
    e.preventDefault();
    if (
      productData.code !== "" &&
      productData.product !== "" &&
      productData.description !== "" &&
      productData.price !== "" &&
      productData.stock !== ""
    ) {
      localStorage.setItem(
        `productData${productData.type}`,
        JSON.stringify(productData)
      );
      setproductData({
        code: "",
        product: "",
        description: "",
        price: "",
        stock: "",
      });

      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);
    } 
  }

  console.log(productData);
  return (
    <Container>
      <Title>Gestão de Produtos</Title>
      <Description>Adicione produtos ao Inventário.</Description>
      {status && <Success>Produto cadastrado com sucesso!</Success>}
      <Form onSubmit={setDataToStorage}>
      <DataForm>
          <Label htmlFor="code">Código</Label>
          <Input
            placeholder="Código do produto"
            type="number"
            id="code"
            value={productData.code}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="product">Produto</Label>
          <Input
            placeholder="Tipo do produto"
            type="text"
            id="product"
            value={productData.product}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="description">Descrição</Label>
          <TextArea
            placeholder="Descrição do produto"
            type="text"
            id="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="price">Preço</Label>
          <FormatedInput
            thousandSeparator={true} 
            prefix={'R$ '}
            placeholder="Somente número"
            id="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="stock">Estoque</Label>
          <Input
            placeholder="Estoque atual"
            type="number"
            id="stock"
            value={productData.stock}
            onChange={handleChange}
            required
          />
        </DataForm>

        <ButtonContainer>
          <NavLink to="/">
            <ModifiedButton type="submit" backColor="transparent">
              Voltar
            </ModifiedButton>
          </NavLink>
          <ModifiedButton
            type="submit"
            backColor="#a06820"
            style={{ width: "12rem" }}
          >
            Adicionar Produto
          </ModifiedButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}