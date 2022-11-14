import { useState, useEffect, createContext } from "react";

const Reservation = createContext();

const ContextReservation = ({ children }) => {
  const [reservation, setReservation] = useState({
    id: "",
    nombre: "",
    rut:"",
    tel: "",
    correo:"",
    fecha: "",
    dias: "",
    cantPersonas: "",
    abono: "",
    valor: "",
    transporte: "",
    tour: "",
    img: "",
    total: ""
  });
  const [flagMercado, setFlagMercado] = useState(false)
  return (
    <Reservation.Provider value={{ reservation, setReservation,flagMercado, setFlagMercado }}>
      {children}
    </Reservation.Provider>
  );
};
export { ContextReservation };
export default Reservation;
