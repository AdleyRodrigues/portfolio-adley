import { Section } from '../Section'

export function WritingSection() {
  return (
    <Section
      id="writing"
      eyebrow="Artigos e Notas Técnicas"
      title="Insights técnicos em formato curto."
      description="Notas sobre decisões arquiteturais, governança de design system, micro-frontends e performance com React e TypeScript."
    >
      <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/15 bg-slate-50/50 dark:bg-white/5 p-6 sm:p-8">
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Em breve: publicações detalhando trade-offs de engenharia, migração de fluxos críticos bancários e padrões de resiliência front-end.
        </p>
      </div>
    </Section>
  )
}
