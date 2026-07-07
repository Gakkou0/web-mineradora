import axios from 'axios'
import { useState, useEffect } from 'react'

type Cidade = {
  id: number
  nome: string
}

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default function Cidades() {
  const [cidades, setCidades] = useState<Cidade[]>([])
  const [nome, setNome] = useState('')

  useEffect(() => {
    carregarCidades()
  }, [])

  const carregarCidades = async () => {
    try {
      const response = await axios.get<Cidade[]>(`${apiUrl}/cidades`)
      setCidades(response.data)
    } catch (error) {
      console.error('Erro ao carregar cidades', error)
      alert('Não foi possível carregar as cidades.')
    }
  }

  const cadastrar = async () => {
    if (!nome.trim()) {
      alert('Informe o nome da cidade.')
      return
    }

    try {
      await axios.post(`${apiUrl}/cidades`, { nome: nome.trim() })
      setNome('')
      carregarCidades()
    } catch (error) {
      console.error('Erro ao cadastrar cidade', error)
      alert('Não foi possível salvar a cidade.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Cidades</h2>
        <p className="mt-2 text-slate-600">
          Adicione as cidades relacionadas a equipamentos ou serviços.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Adicionar cidade</h3>
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
