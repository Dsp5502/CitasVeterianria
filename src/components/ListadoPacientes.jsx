import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPacientes }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll '>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 text-center mb-10'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold '>
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPacientes={eliminarPacientes}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay paciente</h2>
          <p className='text-xl mt-5 text-center mb-10'>
            Comienza Agregando {''}
            <span className='text-indigo-600 font-bold '>
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
