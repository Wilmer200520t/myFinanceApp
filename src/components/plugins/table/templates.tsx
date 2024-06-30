import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";

const formatCurrency = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export function priceBodyTemplate(data: number) {
  return formatCurrency(data);
}

export function ratingBodyTemplate(data?: number) {
  return <Rating value={data} readOnly cancel={false} />;
}

export function statusBodyTemplate(
  renderName: string,
  data: string | number | undefined
) {
  return <Tag value={data} severity={getRender(renderName)}></Tag>;
}

function getRender(renderName: string) {
  switch (renderName) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
}
