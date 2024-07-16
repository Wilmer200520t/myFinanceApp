import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Product {
  id: string;
  description: string;
  type: string;
  amount: number;
}

export default function BasicDemo() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts([
      {
        id: "1000",
        description: "Ferrari",
        type: "Auto",
        amount: 100000,
      },
      {
        id: "1001",
        description: "Macbook",
        type: "Electronica",
        amount: 2000,
      },
      {
        id: "1002",
        description: "Iphone",
        type: "Electronica",
        amount: 1000,
      },
      {
        id: "1003",
        description: "Apple",
        type: "Fruta",
        amount: 200,
      },
      {
        id: "1004",
        description: "Banana",
        type: "Fruta",
        amount: 50,
      },
    ]);
  }, []);

  return (
    <div className="card">
      <DataTable value={products} paginator rows={3} className="p-datatable-sm">
        <Column field="id" header="ID" style={{ width: "20%" }}></Column>
        <Column
          field="description"
          header="Descripcion"
          style={{ width: "40%" }}></Column>
        <Column field="type" header="Tipo" style={{ width: "20%" }}></Column>
        <Column field="amount" header="Monto" style={{ width: "20%" }}></Column>
      </DataTable>
    </div>
  );
}
