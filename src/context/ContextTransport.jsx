import { useState, useEffect, createContext } from "react";
import { getTransports } from "../services/transports/ApiRequestTransport";

const Transport = createContext();

const ContextTransport = ({ children }) => {
  const [transports, setTransports] = useState([]);
  const [transportList, setTransportList] = useState([]);
  const [flagTra, setFlagTra] = useState(false);
  useEffect(() => {
    try {
      const get = async () => {
        const listTransports = await getTransports();
        const list = listTransports.filter((tr)=>{ return tr.ESTADO === 1})
        setTransports(list);
      };
      get();
    } catch (error) {}
  }, []);

  return (
    <Transport.Provider
      value={{
        transports,
        setTransports,
        transportList,
        setTransportList,
        flagTra,
        setFlagTra,
      }}
    >
      {children}
    </Transport.Provider>
  );
};
export { ContextTransport };
export default Transport;