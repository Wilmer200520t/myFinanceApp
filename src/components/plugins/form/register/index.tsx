import { ChangeEventHandler, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function FormRegister(): JSX.Element {
  const [formData, setFormData] = useState({
    nomusuario: "",
    foto: "",
    nombres: "",
    apellidos: "",
    nacimiento: null,
    pais: "",
    correo: "",
    password: "",
    configuracion: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    // Lógica para registrar al usuario
    console.log("Form Data:", formData);
    // Aquí puedes implementar la lógica de registro
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h2>Registro</h2>
        <div className="p-field">
          <label htmlFor="nomusuario">Username</label>
          <InputText
            id="nomusuario"
            name="nomusuario"
            value={formData.nomusuario}
            onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
          />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <InputText
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
          />
        </div>
        <Button label="Register" onClick={handleRegister} />
      </div>
    </div>
  );
}

export default FormRegister;
