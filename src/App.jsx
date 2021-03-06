import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      if (pacientesLS) {
        setPacientes(pacientesLS);
      }
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    console.log('componente listo o cambio');
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPacientes = (id) => {
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
  };

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex '>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPacientes={eliminarPacientes}
        />
      </div>
    </div>
  );
}

export default App;
