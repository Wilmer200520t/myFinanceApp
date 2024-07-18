import { useMemo, useState } from "react";
import { Button } from "primereact/button";
import FloatLabel from "../FloatLabel";
import credentials from "../../../../auth/credentials";
import DialogComp from "../../Dialog";
import { userLogin } from "../../../../data/fetchData";
import { Usuarios } from "../../../../data/dataTypes";

function FormLogin(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userCredentials = useMemo(() => new credentials(), []);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    tittle: string;
    message: string | Usuarios;
  }>({
    tittle: "Error",
    message: "",
  });

  const handleLogin = async () => {
    if (username === "" || password === "") {
      setShowDialog(true);
      setMessage({
        tittle: "Error",
        message: "Usuario y contraseña son requeridos",
      });
      return;
    } else {
      const loginResult = userLogin({ username, password });

      loginResult.then((res) => {
        if (res.error) {
          setShowDialog(true);
          setMessage({
            tittle: "Error",
            message: res.message,
          });
        } else {
          const { id, nomusuario, nombre, correo } = res.message[0];
          if (res.message === "Usuario no encontrado" || id === undefined) {
            setShowDialog(true);
            setMessage({
              tittle: "Error",
              message: "Usuario no encontrado",
            });
          } else {
            userCredentials.logIn({ id, nomusuario, nombre, correo });
            window.location.href = "/dashboard";
          }
        }
      });
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="card login-content">
          <DialogComp
            message={message}
            show={showDialog}
            setShow={setShowDialog}
          />
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
