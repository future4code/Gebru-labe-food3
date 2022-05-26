import styled from "styled-components"
import logoLoading from "../../../img/logoLoading.png"
import React from "react"

const ContainerLoading = styled.div`

  width: 360px;
  height: 640px;
  background-color: black;
  border: 1px solid black;
  align-items: center;
  display:flex;
  justify-content: center;
`

const Logo = styled.img`

  width: 126px;
  height: 65px;
  object-fit: contain;

`

export const LoadingPage = () => {


    return (

        <ContainerLoading>
            <Logo src={logoLoading} alt="photo-logo"/>
        </ContainerLoading>

    )


}