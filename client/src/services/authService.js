import store from '../redux/store'
import { userLogin, userRegister } from './../redux/features/auth/authActions';
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Provide all fields");
    }
  store.dispatch(userLogin({email,password,role}))
  } catch (error) {
    console.log(error);
  }
};
export const handleRegister = (
  e,
  name,
  email,
  role,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
   store.dispatch(userRegister({ name,
    email,
    role,
    password,
    organisationName,
    hospitalName,
    website,
    address,
    phone}))
  } catch (error) {
    console.log(error);
  }
};
