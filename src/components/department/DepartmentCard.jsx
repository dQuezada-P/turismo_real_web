import { NavLink } from "react-router-dom";
import { MdBathtub, IoBedSharp, DiFsharp } from "react-icons/all";

export const DepartmentCard = ({ depto }) => {
  const {
    ID,
    NOMBRE,
    NUMERO_BANNO,
    NUMERO_HABITACION,
    FECHA_INS,
    DIRECCION,
    VALOR_ARRIENDO,
    UBICACION,
    DESCRIPCION,
    IMAGENES,
  } = depto;

  const firstImage = IMAGENES ? (
    "https://turismoreal2.s3.amazonaws.com/" + IMAGENES[0].name
  ).trim() : "";
  return (
    <>
      <NavLink className="" to={`/departamento/${ID}`}>
        <img className="w-full rounded-t-3xl" crossOrigin="Anonymous" src={firstImage} alt="imagen" />
      </NavLink>
      <h3 className="font-semibold text-2xl ml-3 py-2">
        ${VALOR_ARRIENDO} CLP
      </h3>
      <h4 className="font-semibold ml-3 py-2">{UBICACION}</h4>
      <div className="flex justify-center py-2 ">
        <div className="basis-1/5">
          <h4 className="flex gap-1 justify-center items-center text-2xl font-semibold ">
            {NUMERO_HABITACION}
            <span>
              <IoBedSharp />
            </span>
          </h4>
        </div>
        <div className="basis-1/5">
          <h4 className="flex gap-1 px-1 justify-center items-center text-2xl font-semibold">
            {NUMERO_BANNO}
            <span>
              {" "}
              <MdBathtub />
            </span>
          </h4>
        </div>
        <div className="basis-1/2">
          <h4 className="flex text-base font-semibold justify-center h-full items-center">
            {NOMBRE}
            <span></span>
          </h4>
        </div>
      </div>
    </>
  );
};
