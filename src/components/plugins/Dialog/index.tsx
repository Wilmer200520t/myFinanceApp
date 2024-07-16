import { Dialog } from "primereact/dialog";

interface DialogCompProps {
  message: {
    tittle: string;
    message: string;
  };
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function DialogComp({
  message,
  show,
  setShow,
}: DialogCompProps): JSX.Element {
  return (
    <Dialog
      header={message.tittle}
      visible={show}
      style={{
        width: "30vw",
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
      position="center"
      modal={true}
      onHide={() => {
        if (!show) return;
        setShow(false);
      }}>
      <p
        className="m-0"
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: show ? "#333" : "#fff",
        }}>
        {message.message}
      </p>
    </Dialog>
  );
}
