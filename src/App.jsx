import './index.css';
import "./styles/globals.css";
import Layout from './components/Layout.jsx';
import Productos from './components/Productos.jsx';

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">InfinityClouds</h1>
        <p className="text-lg text-gray-300 mb-8">¡Listos para comenzar!</p>
      </div>
      <Productos />
    </Layout>
  );
}
export default App;

