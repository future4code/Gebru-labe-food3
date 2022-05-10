export const goToLogin = (navigate) => {
  navigate("/");
};

<<<<<<< HEAD
export const goToHome = navigate => {
  navigate('/home')
}
export const goToBuscar = navigate => {
  navigate('/home/busca')
}
=======
export const goToHome = (navigate) => {
  navigate("/home");
};
>>>>>>> dd8bbafb70f40e0870cf9c73aae58de263f25d69

export const goToRestaurant = (navigate, restaurantId) => {
  navigate(`/restaurante/${restaurantId}`);
};

export const goToCart = (navigate) => {
  navigate("/carrinho");
};

export const goToProfile = (navigate) => {
  navigate("/perfil");
};

export const goToCadastro = (navigate) => {
  navigate("/cadastro");
};

export const goToEndereco = (navigate) => {
  navigate("/endereco ");
};
export const goBack = (navigate) => {
  navigate(-1);
};
