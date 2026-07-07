export default function Inicio() {
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
          <h3 className="text-lg font-semibold text-slate-900">Próximos passos</h3>
          <p className="mt-2 text-slate-600">
            Integre o backend quando estiver pronto para salvar os registros.
          </p>
        </article>
      </section>
    </div>
  )
}
