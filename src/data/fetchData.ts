import { AllTypesRow, Usuarios } from "./dataTypes";
import UserCrentials from "../auth/credentials";
import { getTableName } from "./mappigColumns";

const BASE_URL = `/api/sql`;

export type responseType = {
  error: boolean;
  message: string;
};

const userCredentials = new UserCrentials();
const user = userCredentials.getUser();
const user_id = user?.id || 1;
const conditionUser = ` WHERE user_id = ${user_id}`;

export async function getData(
  path: string,
  limit?: number
): Promise<AllTypesRow[]> {
  try {
    const limitQuery = limit ? ` LIMIT ${limit}` : "";
    const tabname = getTableName(path);
    const query = `SELECT * FROM ${tabname} ${conditionUser} ${limitQuery}`;

    const response = await fetch(`${BASE_URL}/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      console.error("Error: Network response was not ok", response.statusText);
      return [];
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Error: Expected JSON response, but got", contentType);
      return [];
    }

    const json = await response.json();
    const data: AllTypesRow[] = json;

    if (!Array.isArray(data)) {
      console.error("Error: Data is not an array", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function getQuery(query: string): Promise<number | number[]> {
  try {
    const response = await fetch(`${BASE_URL}/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    let json = await response.json();
    json = json[0] || [];
    return json as number | number[];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function createData(
  path: string,
  data: AllTypesRow,
  limit?: number
): Promise<responseType | AllTypesRow[]> {
  try {
    const tabname = getTableName(path);

    if (data.id !== undefined) {
      delete data.id;
    }

    if (data.user_id !== undefined) {
      data.user_id = user_id;
    }

    if (data.created_at !== undefined) {
      data.created_at = "NOW()";
    }

    const query = `INSERT INTO ${tabname} (${Object.keys(data).join(
      ", "
    )}) VALUES (${Object.values(data)
      .map((value) => {
        if (value === "NOW()" || value === user_id) {
          return value;
        } else {
          return `'${value}'`;
        }
      })

      .join(", ")})`;

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return {
        error: true,
        message: response.statusText,
      };
    }

    const serverResponse = await response.json();

    if (serverResponse.err) {
      const message = serverResponse.err;

      return {
        error: true,
        message: message.sqlMessage,
      };
    }

    const newData = await getData(path, limit);

    return newData;
  } catch (error) {
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function updateData(
  path: string,
  id: number,
  data: AllTypesRow
): Promise<responseType | AllTypesRow[]> {
  try {
    const tabname = getTableName(path);

    if (data.id !== undefined) {
      delete data.id;
      if (data.created_at) delete data.created_at;
    }

    const query = `UPDATE ${tabname} SET ${Object.keys(data)
      .map((key) => `${key} = '${data[key]}'`)
      .join(", ")} WHERE id = ${id}`;

    console.log(query);
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return {
        error: true,
        message: response.statusText,
      };
    }

    const serverResponse = await response.json();

    if (serverResponse.err) {
      const message = serverResponse.err;

      return {
        error: true,
        message: message.sqlMessage,
      };
    }

    const newData = await getData(path);

    return newData;
  } catch (error) {
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function deleteData(
  path: string,
  id: number
): Promise<responseType> {
  try {
    const tabname = getTableName(path);
    const query = `DELETE FROM ${tabname} WHERE id = ${id}`;

    const response = await fetch(BASE_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return {
        error: true,
        message: response.statusText,
      };
    }

    const serverResponse = await response.json();

    if (serverResponse.err) {
      const message = serverResponse.err;

      return {
        error: true,
        message: message.sqlMessage,
      };
    }

    return {
      error: false,
      message: "Eliminado correctamente",
    };
  } catch (error) {
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function userRegister(data: Usuarios): Promise<responseType> {
  try {
    console.log(BASE_URL);

    const nacimiento = data.nacimiento?.toISOString().split("T")[0];

    const query = `
    INSERT INTO fusuarios(nomusuario, nombres, apellidos, nacimiento, pais, correo, password, cofiguracion, created_at) 
    VALUES ('${data.nomusuario}', '${data.nombres}', 
            '${data.apellidos}', '${nacimiento}', 
            '${data.pais}', '${data.correo}', '${data.password}',
            '{"idioma": "es", "tema": "oscuro"}', NOW())
    `;

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return {
        error: true,
        message: response.statusText,
      };
    }

    return {
      error: false,
      message: "Usuario creado correctamente",
    };
  } catch (error) {
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function userLogin(data: {
  username: string;
  password: string;
}): Promise<responseType> {
  try {
    const query = `SELECT fusuarios.* FROM fusuarios WHERE (nomusuario = '${data.username}' or correo = '${data.username}') AND password = '${data.password}' LIMIT 1 `;

    const response = await fetch(`${BASE_URL}/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return {
        error: true,
        message: response.statusText,
      };
    }

    return {
      error: false,
      message: await response.json(),
    };
  } catch (error) {
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
export default {
  getData,
  createData,
  updateData,
  deleteData,
  userRegister,
  userLogin,
};
