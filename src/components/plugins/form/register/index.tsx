import { Button } from "primereact/button";
import FloatLabel from "../FloatLabel";
import FloatCalendar from "../FloatLabel/calendar";
import { useState } from "react";
import DialogComp from "../../Dialog";
import { userRegister } from "../../../../data/fetchData";

function FormRegister(): JSX.Element {
  const [formData, setFormData] = useState<{
    id: number;
    nomusuario: string;
    foto: string;
    nombres: string;
    apellidos: string;
    nacimiento: Date | undefined;
    pais: string;
    correo: string;
    password: string;
    passwordrepeat: string;
  }>({
    id: 0,
    nomusuario: "",
    foto: "",
    nombres: "",
    apellidos: "",
    nacimiento: undefined,
    pais: "",
    correo: "",
    password: "",
    passwordrepeat: "",
  });

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    tittle: string;
    message: string;
  }>({
    tittle: "Error",
    message: "",
  });

  const handleRegister = () => {
    if (formData.password !== formData.passwordrepeat) {
      setShowDialog(true);
      setMessage({
        tittle: "Error",
        message: "Las contraseñas no coinciden",
      });

      return;
    }

    if (
      formData.nomusuario === "" ||
      formData.nombres === "" ||
      formData.apellidos === "" ||
      formData.nacimiento === null ||
      formData.pais === "" ||
      formData.correo === "" ||
      formData.password === ""
    ) {
      setShowDialog(true);
      setMessage({
        tittle: "Error",
        message: "Todos los campos son obligatorios",
      });

      return;
    }

    const response = userRegister(formData);

    response.then((res) => {
      if (res.error) {
        setShowDialog(true);
        setMessage({
          tittle: "Error",
          message: res.message,
        });
        return;
      } else {
        setShowDialog(true);
        setMessage({
          tittle: "Registro",
          message: res.message,
        });

        setFormData({
          id: 0,
          nomusuario: "",
          foto: "",
          nombres: "",
          apellidos: "",
          nacimiento: undefined,
          pais: "",
          correo: "",
          password: "",
          passwordrepeat: "",
        });
      }
    });
  };

  return (
    <div className="register-container">
      <div className="card register-content">
        <h1 className="login-title">Registro</h1>
        <div className="p-field">
          <FloatLabel
            id="nomusuario"
            Label="Nombre de usuario"
            value={formData.nomusuario}
            setValue={(value) =>
              setFormData({ ...formData, nomusuario: value })
            }
            obligatory={true}
          />
        </div>
        <div className="p-field">
          <FloatLabel
            id="nombres"
            Label="Nombres"
            value={formData.nombres}
            setValue={(value) => setFormData({ ...formData, nombres: value })}
            obligatory={true}
          />
        </div>
        <div className="p-field">
          <FloatLabel
            id="apellidos"
            Label="Apellidos"
            value={formData.apellidos}
            setValue={(value) => setFormData({ ...formData, apellidos: value })}
            obligatory={true}
          />
        </div>
        <div className="p-field">
          <FloatCalendar
            id="nacimiento"
            Label="Fecha de Nacimiento"
            value={formData.nacimiento?.toDateString() || ""}
            setValue={(value) =>
              setFormData({ ...formData, nacimiento: new Date(value) })
            }
            format="dd/mm/yy"
            obligatory={true}
          />
        </div>
        <div className="p-field">
          <FloatLabel
            id="pais"
            Label="País"
            value={formData.pais}
            setValue={(value) => setFormData({ ...formData, pais: value })}
            type="dropdown"
            obligatory={true}
          />
        </div>
        <div className="p-field">
          <FloatLabel
            id="correo"
            Label="Correo Electrónico"
            value={formData.correo}
            setValue={(value) => setFormData({ ...formData, correo: value })}
            obligatory={true}
          />
        </div>
        <div className="p-field">
          <FloatLabel
            id="password"
            Label="Contraseña"
            value={formData.password}
            setValue={(value) => setFormData({ ...formData, password: value })}
            type="password"
            obligatory={true}
          />
        </div>
        <div className="p-field">
          <FloatLabel
            id="passwordrepeat"
            Label="Repite la Contraseña"
            value={formData.passwordrepeat}
            setValue={(value) =>
              setFormData({ ...formData, passwordrepeat: value })
            }
            type="password"
            obligatory={true}
          />
        </div>
        <Button label="Registrate" onClick={handleRegister} />
        <div className="login__content__footer">
          <p>
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="login__content__footer__link">
              Iniciar session
            </a>
          </p>
        </div>
      </div>
      <DialogComp message={message} show={showDialog} setShow={setShowDialog} />
    </div>
  );
}

export default FormRegister;
