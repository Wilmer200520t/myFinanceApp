import { Dialog } from "primereact/dialog";
import { AllTypesRow } from "../../../data/dataTypes";

interface modalProps {
  visible: boolean;
  header: string;
  actions: JSX.Element;
  message: string;
  subActions: () => void;
  submitted: boolean;
  data: AllTypesRow;
  setData: (data: AllTypesRow) => void;
}

function modalTemplate({
  visible,
  header,
  actions,
  subActions,
  submitted,
  data,
  setData,
}: modalProps) {
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const val = (e.target && e.target.value) || "";
    const _data = { ...data };
    // @ts-expect-error Description of why this error is expected.
    _data[name] = val;
    setData(_data);
  };

  return (
    <Dialog
      visible={visible}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header={header}
      modal
      className="p-fluid"
      footer={actions}
      onHide={subActions}></Dialog>
  );
}

export default modalTemplate;
