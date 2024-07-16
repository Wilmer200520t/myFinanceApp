import { ProgressSpinner } from "primereact/progressspinner";
interface LoaderProps {
  visible: boolean;
}

function Loader({ visible }: LoaderProps): JSX.Element {
  return (
    <div className="loader__center">
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="8"
        fill="var(--surface-ground)"
        hidden={visible}
      />
    </div>
  );
}

export default Loader;
