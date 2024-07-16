import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRETTOKKEN;

interface userDataProps {
  id: number;
  nomusuario: string;
  nombre: string;
  correo: string;
}

class credentials {
  code(userData: userDataProps) {
    return CryptoJS.AES.encrypt(
      JSON.stringify(userData),
      SECRET_KEY
    ).toString();
  }

  decode(code: string | null) {
    if (!code) return null;
    const bytes = CryptoJS.AES.decrypt(code, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  logIn(userData: userDataProps) {
    localStorage.setItem("auth", this.code(userData));
  }

  logOut() {
    localStorage.removeItem("auth");
  }

  isLoged() {
    return localStorage.getItem("auth") ? true : false;
  }

  getUser() {
    return this.decode(localStorage.getItem("auth"));
  }
}

export default credentials;
