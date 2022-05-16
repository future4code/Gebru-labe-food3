import React from "react";
import { API } from "../../../services/Api";
import { useState, useEffect} from "react";
import {BarraDenavegaçao} from "../../../components/barradenavegaçao";
import { MeuPerfil } from "../Editarperfil/EditarPerfil";
import {DivHistory,CardOrder,Footer,DivFooter,ProfilePageContainer,} from './Style'
import Loading from '../../components/Loading/Loading'
import { goToFeedPage, goToCartPage} from '../../routes/Cordinator'
import {IconButton, Typography,  Divider} from '@material-ui/core'


export const UserPerfil = () => {
  const [perfil, setUserPerfil] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pedidos, setPedido] = useState("");
  useEffect(()=>{
    pegarUserPerfil()
    pegarEndereco()
    pegarPedidos()

  },[])
  const pegarUserPerfil = () => {API.get("/profile", {
    headers: { auth: localStorage.getItem("token") },
  })
    .then((response) => {
      setPerfil(response.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const pegarEndereco = () =>{ API.get("/profile/address", {
    headers: { auth: localStorage.getItem("token") },
  })
    .then((response) => {
      setEndereco(response.data.address);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const pegarPedidos = () =>{ API.get("/orders/history", {
    headers: { auth: localStorage.getItem("token") },
  })
    .then((response) => {
      setPedido(response.data.orders);
    })
    .catch((error) => {
      console.log(error);
    });
  }
 console.log("perfil",perfil)
 console.log("endereco",endereco)
 console.log("pedidos",pedidos)


 const ProfilePage = () => {
    useProtectedPage()
    const history = useHistory()
    const [userProfile, updateUserProfile] = useRequestData({}, '/profile')
    const [orderList, updateOrderList] = useRequestData({}, '/orders/history')
    const user = userProfile.user
    const order = orderList.orders
 
 
 const renderOrders = () => {
  if (order > 0){
      return(
          order.map((item) => {
              return(
                  <CardOrder key={item.id}>
                      <Typography variant="h6" color="primary">Nome do restaurante</Typography>
                      <Typography variant="subtitle2">data</Typography>
                      <Typography variant="h5">Total</Typography>
                  </CardOrder>
              )
          })
      )
  } else {
      return(
          <Typography 
          align="center"
          style={{marginTop: 30}}>Você não realizou nenhum pedido</Typography>
      )
  }
  
}
 
 return (
    <><>
      <BarraDenavegaçao pageName={"Meu Perfil"} />
    </><ProfilePageContainer>

        <p>{perfil.name}</p>
        <p>{perfil.email}</p>
        <p>{perfil.cpf}</p>
        <p>{endereco.street}</p>
        <p>{endereco.city}</p>
        <p>{endereco.complement}</p>
        <p>{endereco.neighbourhood}</p>
        <p>{endereco.number}</p>
        <p>{endereco.state}</p>

        {user ? renderUser() : <Loading />}

        <DivHistory>
          <Typography>Histórico de pedidos</Typography>
          <Divider variant="middle" />
          <div>
            {order ? renderOrders() : <Loading />}
          </div>
        </DivHistory>

        <Footer>
          <DivFooter>
            <IconButton onClick={() => goToFeedPage(history)}>
              <HomePageIcon />
            </IconButton>
            <IconButton onClick={() => goToCartPage(history)}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <AvatarSelectedIcon />
            </IconButton>
          </DivFooter>
        </Footer>
      </ProfilePageContainer></>
)
}};
 export default MeuPerfil;
