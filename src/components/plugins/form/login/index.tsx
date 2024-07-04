import { useState } from "react";
import { InputText } from "primereact/inputtext";
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
        <h1 className="login-title">Iniciar sesión</h1>
        <div className="card login-content">
          <div className="p-field">
            <FloatLabel
              id="username"
              Label="Usuario"
              value={username}
              setValue={setUsername}
              classChild="p-inputtext-lg"
            />
          </div>
          <div className="p-field">
            <FloatLabel
              id="password"
              Label="Contraseña"
              value={password}
              setValue={setPassword}
              type="password"
              classChild="p-inputtext-lg"
            />
          </div>
          <Button
            label="Login"
            onClick={handleLogin}
            className="p-button-lg p-d-block p-mt-4"
          />
        </div>
      </div>
    </>
  );
}

export default FormLogin;
