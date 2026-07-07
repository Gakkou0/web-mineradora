import axios from 'axios'

type EquipamentoPayload = {
  nome: string
  setor: string
}

type Equipamento = {
  id: number
  nome: string
  setor: string
}

type CidadePayload = {
  nome: string
}

type Cidade = {
  id: number
  nome: string
}

type FuncionarioPayload = {
  nome: string
  cargo: string
}

type Funcionario = {
  id: number
  nome: string
  cargo: string
}

type ServicoPayload = {
  nome: string
  descricao: string
}

type Servico = {
  id: number
  nome: string
  descricao: string
}

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

const listarEquipamentos = async (): Promise<Equipamento[]> => {
  const response = await apiClient.get<Equipamento[]>('/equipamentos')
  return response.data
}

const criarEquipamento = async (payload: EquipamentoPayload): Promise<void> => {
  await apiClient.post('/equipamentos', payload)
}

const listarCidades = async (): Promise<Cidade[]> => {
  const response = await apiClient.get<Cidade[]>('/cidades')
  return response.data
}

const criarCidade = async (payload: CidadePayload): Promise<void> => {
  await apiClient.post('/cidades', payload)
}

const listarFuncionarios = async (): Promise<Funcionario[]> => {
  const response = await apiClient.get<Funcionario[]>('/funcionarios')
  return response.data
}

const criarFuncionario = async (payload: FuncionarioPayload): Promise<void> => {
  await apiClient.post('/funcionarios', payload)
}

const listarServicos = async (): Promise<Servico[]> => {
  const response = await apiClient.get<Servico[]>('/servicos')
  return response.data
}

const criarServico = async (payload: ServicoPayload): Promise<void> => {
  await apiClient.post('/servicos', payload)
}

export const equipamentoService = {
  listar: listarEquipamentos,
  criar: criarEquipamento,
}

export const cidadeService = {
  listar: listarCidades,
  criar: criarCidade,
}

export const funcionarioService = {
  listar: listarFuncionarios,
  criar: criarFuncionario,
}

export const servicoService = {
  listar: listarServicos,
  criar: criarServico,
}
