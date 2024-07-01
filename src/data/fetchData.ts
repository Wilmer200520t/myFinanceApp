import { AllTypesRow } from "./dataTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL_API;

export type responseType = {
  error: boolean;
  message: string;
};

export async function getData(
  path: string,
  limit?: number
): Promise<responseType | AllTypesRow[]> {
  const data: AllTypesRow[] = await fetch(`${BASE_URL}/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      json = json.results || json;

      return json;
    })
    .catch((error) => {
      console.error("Error:", error);
      return [];
    });

  return data.slice(0, limit || data.length);
}

export async function createData(
  path: string,
  data: AllTypesRow,
  limit?: number
): Promise<responseType | AllTypesRow[]> {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const newData = await getData(path, limit);

    if (!response.ok || !newData) {
      throw new Error(`Failed to update data: ${response.statusText}`);
    }

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
): Promise<responseType> {
  try {
    const response = await fetch(`${BASE_URL}/${path}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update data: ${response.statusText}`);
    }

    return {
      error: false,
      message: String(id),
    };
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
    const response = await fetch(`${BASE_URL}/${path}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete: ${response.statusText}`);
    }

    return {
      error: false,
      message: "Actualizado correctamente",
    };
  } catch (error) {
    return {
      error: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function userRegister(data: AllTypesRow): Promise<responseType> {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to register user: ${response.statusText}`);
    }

    return {
      error: false,
      message: "Actualizado correctamente",
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
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to login: ${response.statusText}`);
    }

    return {
      error: false,
      message: "Actualizado correctamente",
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
