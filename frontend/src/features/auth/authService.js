// hna kanimportiw axios li kay3awnna ndirou les requêtes (GET, POST...) l backend
import axios from 'axios'

// hna kan3rfou lien l principal ta3 API dyal users
// b7al ila kan backend kaybda b '/api/users'
const API_URL = '/api/users/'

// ==========================================================
// hadi hia function register li katdir sign up l user jdid
const register = async (userData) => {
  // hna kan3ayto l backend b POST 3la lien '/api/users/register'
  // w kandozou m3aha userData li fiha username, email, password...
  const response = await axios.post(API_URL + 'register', userData)

  // ila backend rj3 lina data, kayn sauvegardiwha f localStorage
  // bach yb9a user connecté 7ta ila refrech l page
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  // hna kanrj3o data bach tji f authSlice w ttsajal f state.user
  return response.data
}

// ========================================================== 
// hadi hia function login li katdir sign in
const login = async (userData) => {
  // hna backend katkon fih route dyal login: '/api/users/login'
  // kan3ayto biha w kandozou userData (username w password)
  const response = await axios.post(API_URL + 'login', userData)

  // ila rj3 data (token + info user), kan7afdouha f localStorage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  // w kanrj3o data bach tji f Redux state
  return response.data
}

// ==========================================================
// hadi fct logout katmas7 user mn localStorage
// bach ykhrj mn session (logout)
const logout = () => {
  localStorage.removeItem('user')
}

// ==========================================================
// hna kanjm3o 3 les fct f object wahd bach nsadrouhom
const authService = {
  register, // tsjil
  logout,   // khorouj
  login,    // dakhoul
}

// ==========================================================
// hna kanexportiw object authService bach n9dro nimportiw f authSlice
export default authService