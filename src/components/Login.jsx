import './Login.css'

const Login = () => {
  return (
    <div className="login-cmp">
      <h1> Login</h1 >
      <form>
        <label htmlFor="username">Nombre de usuario</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </ div>
  )
}
export default Login