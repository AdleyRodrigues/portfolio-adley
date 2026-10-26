import { Section } from '../Section'
import { education, timeline } from '../../data/siteContent'

export function ExperienceSection() {
  return (
    <>
      {/* Timeline Section */}
      <Section
        id="timeline"
        eyebrow="Timeline profissional"
        title="Progressão de carreira com foco em impacto técnico."
        description="Da base em infraestrutura e desenvolvimento à liderança de squads e arquitetura de software em produtos financeiros e educacionais."
      >
        <ol className="flex flex-col gap-5 list-none p-0 m-0">
          {timeline.map((item) => (
            <li
              key={item.period}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-7 shadow-xs flex flex-col gap-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs uppercase font-bold tracking-wider font-mono text-blue-600 dark:text-blue-400">
                  {item.period}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {item.company}
              </p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-500 dark:text-slate-400 pl-1">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Education Section */}
      <Section
        id="formacao"
        eyebrow="Formação acadêmica"
        title="Base técnica estruturada e aplicada ao mundo real."
        description="Formação em computação e sistemas, combinando fundamentos de algoritmos com experiência prática contínua."
      >
        <ol className="flex flex-col gap-5 list-none p-0 m-0">
          {education.map((item) => (
            <li
              key={`${item.institution}-${item.period}`}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-7 shadow-xs flex flex-col gap-1.5"
            >
              <span className="text-xs uppercase font-bold tracking-wider font-mono text-slate-500 dark:text-slate-400">
                {item.period}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {item.institution}
              </h3>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {item.course}
              </p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-500 dark:text-slate-400 pl-1">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
