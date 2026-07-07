import axios from 'axios'
import { useEffect, useState } from 'react'

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

type ApiStatus = 'checking' | 'connected' | 'disconnected'

export default function Inicio() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>('checking')

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await axios.get(apiUrl, { timeout: 5000 })
        setApiStatus(response.status >= 200 && response.status < 300 ? 'connected' : 'disconnected')
      } catch (error) {
        console.error('API status check failed', error)
        setApiStatus('disconnected')
      }
    }

    checkConnection()
    const interval = window.setInterval(checkConnection, 15000)
    return () => window.clearInterval(interval)
  }, [])

  const statusLabel = apiStatus === 'connected' ? 'Conectada' : apiStatus === 'disconnected' ? 'Desconectada' : 'Verificando'
  const statusColor = apiStatus === 'connected' ? 'bg-emerald-500' : apiStatus === 'disconnected' ? 'bg-rose-500' : 'bg-amber-400'

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Bem-vindo à Mineradora</h2>
        <p className="text-slate-600">
          Use o sistema para organizar equipamentos, cidades, colaboradores e serviços.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-3xl bg-slate-100 p-5">
          <h3 className="text-lg font-semibold text-slate-900">Visão geral</h3>
          <p className="mt-2 text-slate-600">
            Navegue entre as páginas para registrar e consultar os dados.
          </p>
        </article>
        <article className="rounded-3xl bg-slate-100 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Status do servidor</h3>
              <p className="mt-2 text-slate-600">
                Verifique o status da conexão:
              </p>
            </div>
            <span className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white ${statusColor}`}>
              API {statusLabel}
            </span>
          </div>
        </article>
      </section>
    </div>
  )
}
