import { Dialog } from "primereact/dialog";

interface DialogConfirmationProps {
  deleteDialog: boolean;
  hideDialog: () => void;
  deleteDialogFooter: JSX.Element;
  data: string;
  message: string;
}

function DialogConfirmation({
  deleteDialog,
  hideDialog,
  deleteDialogFooter,
  data,
  message,
}: DialogConfirmationProps) {
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
        {data && (
          <span>
            {message} <b>{data}</b>?
          </span>
        )}
      </div>
    </Dialog>
  );
}

export default DialogConfirmation;
