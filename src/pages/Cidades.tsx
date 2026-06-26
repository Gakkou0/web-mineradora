import React, { useState, useEffect } from 'react'

type Cidade = {
  id: number
  nome: string
}

export default function Cidades() {
  const [cidades, setCidades] = useState<Cidade[]>([])
  const [nome, setNome] = useState('')

  useEffect(() => {
    const saved = window.localStorage.getItem('cidades')
    if (saved) {
      setCidades(JSON.parse(saved))
    }
  }, [])

  const cadastrar = () => {
    if (!nome.trim()) {
      alert('Preencha o nome da cidade!')
      return
    }

    const novo = { id: Date.now(), nome: nome.trim() }
    const updated = [...cidades, novo]
    setCidades(updated)
    window.localStorage.setItem('cidades', JSON.stringify(updated))
    setNome('')
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Gestão de Cidades</h2>
        <p className="mt-2 text-slate-600">
          Adicione cidades usadas pela mineradora para relacionar equipamentos ou serviços.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Nova Cidade</h3>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Nome da Cidade"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
          <button
            type="button"
            onClick={cadastrar}
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Cadastrar
          </button>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Cidades Cadastradas</h3>
        <ul className="mt-4 space-y-3">
          {cidades.map((cidade) => (
            <li key={cidade.id} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 shadow-sm">
              {cidade.nome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
