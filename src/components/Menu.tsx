import React from 'react'

type MenuProps = {
  setPagina: React.Dispatch<React.SetStateAction<string>>
}

export default function Menu({ setPagina }: MenuProps) {
  const baseButton = 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-left text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900'

  return (
    <nav className="flex flex-col gap-3">
      <button type="button" className={baseButton} onClick={() => setPagina('inicio')}>
        Início
      </button>
      <button type="button" className={baseButton} onClick={() => setPagina('equipamentos')}>
        Equipamentos
      </button>
      <button type="button" className={baseButton} onClick={() => setPagina('cidades')}>
        Cidades
      </button>
      <button type="button" className={baseButton} onClick={() => setPagina('funcionarios')}>
        Funcionários
      </button>
      <button type="button" className={baseButton} onClick={() => setPagina('servicos')}>
        Serviços
      </button>
    </nav>
  )
}
