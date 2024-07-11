import './Register.css'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const rawResponse = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          names: e.target.nombres.value,
          email: e.target.username.value,
          hash: e.target.password.value
        })
      })
      const response = await rawResponse.json()
      if (response?.success) {
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="register-cmp">
      <h1>Registrarse</h1 >
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombres">Nombres</label>
        <input type="text" name="nombres" id="nombres" />
        <label htmlFor="username">Nombre de usuario</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </ div>
  )
}
export default Register