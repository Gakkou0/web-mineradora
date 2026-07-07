import axios from 'axios'
import { useState, useEffect } from 'react'

type Servico = {
  id: number
  nome: string
  descricao: string
}

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default function Servicos() {
  const [servicos, setServicos] = useState<Servico[]>([])
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    carregarServicos()
  }, [])

  const carregarServicos = async () => {
    try {
      const response = await axios.get<Servico[]>(`${apiUrl}/servicos`)
      setServicos(response.data)
    } catch (error) {
      console.error('Erro ao carregar serviços', error)
      alert('Não foi possível carregar os serviços.')
    }
  }

  const cadastrar = async () => {
    if (!nome.trim() || !descricao.trim()) {
      alert('Preencha todos os campos.')
      return
    }

    try {
      await axios.post(`${apiUrl}/servicos`, { nome: nome.trim(), descricao: descricao.trim() })
      setNome('')
      setDescricao('')
      carregarServicos()
    } catch (error) {
      console.error('Erro ao cadastrar serviço', error)
      alert('Não foi possível salvar o serviço.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Serviços</h2>
        <p className="mt-2 text-slate-600">
          Anote os serviços realizados e mantenha o histórico.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Adicionar serviço</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
          <input
            type="text"
            placeholder="Nome do Serviço"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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
        <h3 className="text-xl font-semibold text-slate-900">Serviços Cadastrados</h3>
        <ul className="mt-4 space-y-3">
          {servicos.map((servico) => (
            <li key={servico.id} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 shadow-sm">
              <span className="font-semibold text-slate-900">{servico.nome}</span>
              <span className="block text-sm text-slate-500">{servico.descricao}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
