import styled from "styled-components"

export const ContainerGeral = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

`
export const ContainerEndereco = styled.main`

    display: flex;
    flex-direction: column;
    width: 360px;
    height: 640px;
    border: 1px solid black;
    padding-top:5px;
    padding-bottom:20px;
`
export const ContainerVoltar = styled.div`
    display: flex;
    width: 360px;
    height: 35px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

`
export const ImgVoltar = styled.img`
  width: 25px;
`
export const ButtonVoltar = styled.button`
  width: 33px;
  height: 27px;
  margin-left:16px;
  margin-top: 5px;
  border: none;
   
`
export const ContainerTitle = styled.div`
    width: 360px;
    height:4em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    
`
export const TextTitlerEndereco = styled.h1`

 width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`

export const LabelLogradouro =styled.label`
    width: 78px;
    height: 18px;
    margin: 3px 234px 43px 16px;
    padding-right:20px;
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    position: relative;
    top: 12px;
    left: 20px;
    background-color: white;

`
export const ContainerInputLabelLogradouro = styled.div`

    width: 360px;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    

`
export const InputLabelLogradouro = styled.input`
     width: 328px;
    height: 56px;
    font-family: Roboto;
    border: solid 1px  #b8b8b8;
    margin-right: 0px;

`

export const LabelNumero =styled.label`
    width: 78px;
    height: 18px;
    margin: 3px 234px 43px 16px;
    padding-right:20px;
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    position: relative;
    top: 12px;
    left: 20px;
    background-color: white;

`
export const ContainerInputNumero = styled.div`

    width: 360px;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    

`
export const InputNumero = styled.input`
     width: 328px;
    height: 56px;
    font-family: Roboto;
    border: solid 1px  #b8b8b8;
    margin-right: 0px;

`
export const LabelComplemento = styled.label`
    width: 78px;
    height: 18px;
    margin: 3px 234px 43px 16px;
    padding-right:20px;
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    position: relative;
    top: 12px;
    left: 20px;
    background-color: white;

`
export const ContainerInputComplemento = styled.div`

    width: 360px;
    height:4em;
    display: flex;
    justify-content: center;
    align-items: center;
   

`
export const InputComplemento = styled.input`
     width: 328px;
    height: 56px;
    font-family: Roboto;
    border: solid 1px  #b8b8b8;
    margin-right: 0px;

`
export const LabelBairro = styled.label`
    width: 78px;
    height: 18px;
    margin: 3px 234px 43px 16px;
    padding-right:20px;
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    position: relative;
    top: 12px;
    left: 20px;
    background-color: white;

`
export const ContainerInputBairro = styled.div`

    width: 360px;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    

`
export const InputBairro = styled.input`
     width: 328px;
    height: 56px;
    font-family: Roboto;
    border: solid 1px  #b8b8b8;
    margin-right: 0px;

`
export const LabelCidade =styled.label`
    width: 78px;
    height: 18px;
    margin: 3px 234px 43px 16px;
    padding-right:20px;
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    position: relative;
    top: 12px;
    left: 20px;
    background-color: white;

`
export const ContainerInputCidade = styled.div`

    width: 360px;
    height: 4em;
    display: flex;;
    justify-content: center;
    align-items: center;
    

`
export const InputCidade = styled.input`
     width: 328px;
    height: 56px;
    font-family: Roboto;
    border: solid 1px  #b8b8b8;
    

`

export const LabelEstado = styled.label`
    width: 78px;
    height: 18px;
    margin: 3px 234px 43px 16px;
    padding-right:20px;
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    position: relative;
    top: 12px;
    left: 20px;
    background-color: white;

`
export const ContainerInputEstado = styled.div`

    width: 360px;
    height: 4em;
    display: flex;;
    justify-content: center;
    align-items: center;
    

`
export const InputEstado = styled.input`
     width: 328px;
    height: 56px;
    font-family: Roboto;
    border: solid 1px  #b8b8b8;
    

`

export const ContainerButtonSalvar = styled.div`
    width: 360px;
    height: 3em;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const ButtonSalvar = styled.button`
    width: 296px;
    height: 42px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 600;
    text-align:center;
    border: none;
    background-color: #5cb646;
    
`