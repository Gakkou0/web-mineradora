import React from 'react'

export default function Inicio() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Bem-vindo ao Sistema Mineradora</h2>
        <p className="text-slate-600">
          Aqui você pode gerenciar equipamentos, cidades, funcionários e serviços.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-3xl bg-slate-100 p-5">
          <h3 className="text-lg font-semibold text-slate-900">Organização</h3>
          <p className="mt-2 text-slate-600">
            Use as páginas para cadastrar e visualizar os dados da mineradora.
          </p>
        </article>
        <article className="rounded-3xl bg-slate-100 p-5">
          <h3 className="text-lg font-semibold text-slate-900">Próximos passos</h3>
          <p className="mt-2 text-slate-600">
            Conecte o backend e o Supabase later para persistir os registros.
          </p>
        </article>
      </section>
    </div>
  )
}
