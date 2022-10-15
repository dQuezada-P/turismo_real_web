import { useState, useEffect } from "react";
import {
  VscHeart,
  RiShareForwardLine,
  TbBath,
  IoBedOutline,
  FaMapMarkedAlt,
  IoCarOutline,
  BsBuilding,
  MdOutlineChair,
} from "react-icons/all";
import { useDepartment } from "../../context/hooks/useDepartment";
import Carousel from "../carousel/Caraousel";
import { Spinner } from "../spinner/Spinner";
import { Link } from "react-router-dom";

export const DepartmentCardInfo = ({ images }) => {
  const { department, setDepartment } = useDepartment();
  const [ loaded, setLoaded ] = useState(false);
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
  } = department;
  const newValorArriendo = Intl.NumberFormat("es-CL", {
    currency: "CLP",
    style: "currency",
  }).format(VALOR_ARRIENDO);

  useEffect(() => {
    if (!loaded)
    setTimeout(() => {setLoaded(true)}, 3000);
  }, []);

  return (
    <>
      <div className="Cajacard md:grid md:grid-cols-3 mx-2 md:w-4/6 md:mx-auto shadow-2xl rounded-3xl ">
        <div className="Cajacard_corazon md:col-span-2 md:rounded-l-3xl md:h-full h-1/2 mx-8 rounded-t-3xl md:rounded-tr-none md:mx-0.5 flex justify-center items-center">
          <div className="w-11/12 h-5/6 bg-white md:border-r-2  border-gray-200 ">
            <div className="text-3xl h-1/6 flex gap-2 items-center text-purple-600">
              <button>
                <VscHeart />
              </button>
              <button>
                {" "}
                <RiShareForwardLine />
              </button>
            </div>

            <div className="Cajacard_info_dept bg-gray-100 w-11/12 mx-auto h-5/6 shadow-xl rounded-3xl flex flex-col justify-center items-center">
              <h3 className="md:mx-20 w-full py-2 md:text-3xl text-center">
                DEPARTAMENTO EN ARRIENDO
              </h3>
              <h2 className="md:mx-20 w-full py-2 md:text-3xl text-center">
                {newValorArriendo}-CLP
              </h2>
              <dir className="flex w-full justify-center gap-2 md:gap-8">
                <div>
                  <h2 className="flex items-center gap-4 text-3xl ">
                    {NUMERO_HABITACION}
                    <span className="text-purple-600">
                      <IoBedOutline />
                    </span>
                  </h2>
                  <span className="font-semibold uppercase">
                    {NUMERO_HABITACION > 1 ? "Habitaciónes" : "Habitación"}
                  </span>
                </div>
                <div>
                  <h2 className="flex items-center gap-4 text-3xl ">
                    {NUMERO_BANNO}
                    <span className="text-purple-600">
                      <TbBath />
                    </span>
                  </h2>
                  <span className="font-semibold uppercase">
                    {NUMERO_BANNO > 1 ? "Baños" : "Baño"}
                  </span>
                </div>
              </dir>
            </div>
          </div>
        </div>
        <div className="Cajacard_info md:col-span-1 md:rounded-r-3xl md:h-full h-1/2 mx-8 rounded-b-3xl md:rounded-tl-none md:rounded-bl-none md:mx-0.5 grid grid-rows-5  ">
          <div className="md:ml-16 border-b-1 border-gray-200  items-center">
            {" "}
            <h4 className="flex justify-center font-semibold ">
              Actualizado:#
            </h4>
            <h4 className="flex justify-center font-semibold">Publicado:#</h4>
          </div>
          <h4 className="flex justify-center font-semibold  items-center uppercase">
            Código Departamento: {ID}
          </h4>
          <h4 className="flex  font-semibold gap-4 items-center ">
            <span className="text-3xl text-purple-600">
              <IoCarOutline />
            </span>
            Estacionamientos#
          </h4>
          <h4 className="flex  font-semibold gap-4 items-center  ">
            <span className="text-3xl text-purple-600">
              <MdOutlineChair />
            </span>
            <p className="uppercase">{DESCRIPCION}</p>
          </h4>
          <h4 className="flex font-semibold gap-4 items-center  ">
            <span className="text-3xl text-purple-600">
              <BsBuilding />
            </span>
            <p className="uppercase">{UBICACION}</p>
          </h4>
          <h4 className="flex justify-end gap-1 items-center font-semibold mb-5 mr-8 text-3xl text-purple-600">
            <span className="text-sm text-black ">
              <Link className="bg-purple-600 p-2 rounded-xl" to={"/reserva"}>RESERVAR</Link>
            </span>
          </h4>
        </div>
      </div>
      <div className="Cajacard_img w-full mr-4 md:w-4/6 md:mx-auto flex rounded-3xl relative ">
        {/* {loaded ? (<Carousel images={images} />) : (<Spinner/>)} */}
        <Carousel images={images} />
      </div>
    </>
  );
};
