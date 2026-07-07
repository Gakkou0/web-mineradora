import axios from 'axios'
import { useState, useEffect } from 'react'

type Equipamento = {
  id: number
  nome: string
  setor: string
}

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
  const [nome, setNome] = useState('')
  const [setor, setSetor] = useState('')

  useEffect(() => {
    carregarEquipamentos()
  }, [])

  const carregarEquipamentos = async () => {
    try {
      const response = await axios.get<Equipamento[]>(`${apiUrl}/equipamentos`)
      setEquipamentos(response.data)
    } catch (error) {
      console.error('Erro ao buscar equipamentos', error)
      setEquipamentos([])
    }
  }

  const cadastrar = async () => {
    if (!nome.trim() || !setor.trim()) {
      alert('Preencha todos os campos.')
      return
    }

    try {
      await axios.post(`${apiUrl}/equipamentos`, { nome: nome.trim(), setor: setor.trim() })
      setNome('')
      setSetor('')
      carregarEquipamentos()
    } catch (error) {
      console.error('Erro ao cadastrar', error)
      alert('Não foi possível salvar o equipamento.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Equipamentos</h2>
        <p className="mt-2 text-slate-600">
          Registre e veja os equipamentos em uso.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Adicionar equipamento</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
          <input
            type="text"
            placeholder="Nome do Equipamento"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
          <input
            type="text"
            placeholder="Setor (Ex: Extração)"
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
          <button
            type="button"
            onClick={cadastrar}
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Adicionar
          </button>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Equipamentos Cadastrados</h3>
        <ul className="mt-4 space-y-3">
          {equipamentos.map((eq) => (
            <li key={eq.id} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 shadow-sm">
              <span className="font-semibold text-slate-900">{eq.nome}</span>
              <span className="block text-sm text-slate-500">Setor: {eq.setor}</span>
            </li>
          ))}
          {equipamentos.length === 0 && (
            <li className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 shadow-sm">
              Nenhum equipamento cadastrado.
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
