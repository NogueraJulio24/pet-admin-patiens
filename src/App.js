import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Arreglo de citas
  const [citas, guardarCitas ] = useState([]);
  
  // función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }


  return (
    <>
      <h1 className="text-center">Administrador de Pacientes</h1>

      <div className="container">
          <div className="row">
            <div className="col-6">
              <Formulario 
                crearCita={crearCita}
              />
            </div>  

            <div className="col-6">
              <h2>Citas</h2>
              {citas.map(cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                />
              ))}
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
