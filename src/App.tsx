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
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/80">
        <header className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Portal Mineradora
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Painel de controle
          </h1>
        </header>

        <Menu setPagina={setPagina} />

        <main className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-100">
          {pagina === 'inicio' && <Inicio />}
          {pagina === 'equipamentos' && <Equipamentos />}
          {pagina === 'cidades' && <Cidades />}
          {pagina === 'funcionarios' && <Funcionarios />}
          {pagina === 'servicos' && <Servicos />}
        </main>
      </div>
    </div>
  )
}

export default App
