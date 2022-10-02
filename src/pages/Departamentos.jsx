import { useDepartment } from "../context/hooks/useDepartment";
import { DepartmentCard } from "../components/department/DepartmentCard";
import { DepartmentFilter } from "../components/department/DepartmentFilter";
import { Spinner } from "../components/spinner/Spinner";
export const Departamentos = () => {
  const { departments, setdepartments } = useDepartment();
  const { charging, setCharging } = useDepartment();

  return charging ? (
    <Spinner />
  ) : (
    <>
      <div className=" mx-6 md:mx-40">
        <DepartmentFilter />
        <div className="grid md:grid-cols-4 mb-12 gap-8">
          {departments.map((depto) => (
            <div className="shadow-2xl rounded-3xl" key={depto.ID}>
              <DepartmentCard depto={depto} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
