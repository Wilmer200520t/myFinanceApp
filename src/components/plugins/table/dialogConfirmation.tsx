import { Dialog } from "primereact/dialog";

interface DialogConfirmationProps {
  deleteDialog: boolean;
  hideDialog: () => void;
  deleteDialogFooter: JSX.Element;
  data: string | number | string[] | number[] | null;
  message?: string;
}

function DialogConfirmation({
  deleteDialog,
  hideDialog,
  deleteDialogFooter,
  data,
  message,
}: DialogConfirmationProps) {
  const messageDefault = data
    ? "Estas seguro de eliminar el registro con ID  "
    : "Estas seguro de eliminar los registros seleccionados";
  message = message || messageDefault;
  return (
    <Dialog
      visible={deleteDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Confirm"
      modal
      footer={deleteDialogFooter}
      onHide={hideDialog}>
      <div className="confirmation-content">
        <i
          className="pi pi-exclamation-triangle mr-3"
          style={{ fontSize: "2rem" }}
        />
        <span>
          {message} <b>{data || ""}</b>?
        </span>
      </div>
    </Dialog>
  );
}

export default DialogConfirmation;
