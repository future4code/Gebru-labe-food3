export const goToLogin = navigate => {
  navigate('/')
}

export const goToHome = navigate => {
  navigate('/home')
}

export const goToRestaurant = (navigate, restaurantId) => {
  navigate(`/restaurante/${restaurantId}`)
}

export const goToCart = navigate => {
  navigate('/carrinho')
}

export const goToProfile = navigate => {
  navigate('/perfil')
}

export const goToCadastro = navigate => {
  navigate('/cadastro')
}

export const goToEndereco =navigate => {
  navigate('/endereco ')
}