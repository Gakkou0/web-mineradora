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

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
const listarRemoto = async (): Promise<Equipamento[]> => {
  const response = await apiClient.get<Equipamento[]>('/equipamentos')
  return response.data
}

const criarRemoto = async (payload: EquipamentoPayload): Promise<void> => {
  await apiClient.post('/equipamentos', payload)
}
export const equipamentoService = {
  listar: listarRemoto,
  criar: criarRemoto,
}
