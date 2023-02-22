import { useNavigate } from "react-router-dom";

export const NoFound = () => {
  const regresar = useNavigate();
  return (
    <div id="main" className="main">
      <p>No ENCONTRADO</p>
      <p>
        <button onClick={() => regresar(-1)}>Registrar</button>
      </p>
    </div>
  );
};
