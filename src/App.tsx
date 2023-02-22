import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { RuteoComplete } from './app/utilities/routes/RuteoComplete';


const loading = <div>Por favor sea paciente...</div>;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={loading}>
      <RuteoComplete/>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
