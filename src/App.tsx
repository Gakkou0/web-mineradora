import { useState } from 'react'
import Menu from './components/Menu'
import Inicio from './pages/Inicio'
import Equipamentos from './pages/Equipamentos'
import Cidades from './pages/Cidades'
import Funcionarios from './pages/Funcionarios'
import Servicos from './pages/Servicos'

function App() {
  const [pagina, setPagina] = useState('inicio')

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      
        <header className="mb-6">
          <h1 className="mt-3 pl-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Painel de controle
          </h1>
        </header>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <main className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-100">
            {pagina === 'inicio' && <Inicio />}
            {pagina === 'equipamentos' && <Equipamentos />}
            {pagina === 'cidades' && <Cidades />}
            {pagina === 'funcionarios' && <Funcionarios />}
            {pagina === 'servicos' && <Servicos />}
          </main>

          <aside className="w-full lg:w-48 lg:flex-none">
            <Menu setPagina={setPagina} />
          </aside>
        </div>
      </div>
  )
}

export default App
