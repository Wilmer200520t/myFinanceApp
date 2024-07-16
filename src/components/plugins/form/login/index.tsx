import { useState } from "react";
import { Button } from "primereact/button";
import FloatLabel from "../FloatLabel";

function FormLogin(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para autenticar al usuario
    console.log("Username:", username);
    console.log("Password:", password);
    // Aquí puedes implementar la lógica de autenticación
  };

  return (
    <>
      <div className="login-container">
        <div className="card login-content">
          <h1 className="login-title">Iniciar sesión</h1>
          <div className="p-field">
            <FloatLabel
              id="username"
              Label="Usuario"
              value={username}
              setValue={setUsername}
            />
          </div>
          <div className="p-field">
            <FloatLabel
              id="password"
              Label="Contraseña"
              value={password}
              setValue={setPassword}
              type="password"
            />
          </div>
          <Button
            label="Login"
            onClick={handleLogin}
            className="p-button-lg p-d-block p-mt-4"
          />
          <div className="login__content__footer">
            <p>
              ¿No tienes cuenta?{" "}
              <a href="/register" className="login__content__footer__link">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
