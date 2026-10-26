import { Building2, ExternalLink, Code2, DollarSign, Handshake } from 'lucide-react'
import { Section } from '../Section'
import { Button } from '../ui/Button'
import { InstagramIcon, WhatsAppIcon } from '../ui/Icons'
import { analyticsEvents, socialLinks } from '../../data/siteContent'
import { trackEvent } from '../../lib/analytics'

const guidetechPillars = [
  {
    icon: <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    title: 'Soluções sob medida',
    description: 'Desenvolvimento de sites, apps e sistemas alinhados ao fluxo real do negócio.',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    title: 'Orçamento transparente',
    description: 'Escopo, prazo e investimento claros desde o início, sem surpresa no processo.',
  },
  {
    icon: <Handshake className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    title: 'Consultoria estratégica',
    description: 'Posicionamento técnico e apoio de ponta a ponta para vender mais no digital.',
  },
]

export function GuidetechSection() {
  return (
    <Section
      id="guidetech"
      eyebrow="Guidetech"
      title="Software house focada em crescimento digital"
      description="A Guidetech é minha frente de serviços para projetos sob medida, com foco em execução prática, comunicação clara e entrega orientada a resultado."
    >
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0">
        {guidetechPillars.map((pillar) => (
          <li
            key={pillar.title}
            className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-5 flex flex-col gap-2.5 shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/20">
                {pillar.icon}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {pillar.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-3">
        <Button
          as="a"
          href={socialLinks.company}
          target="_blank"
          rel="noreferrer"
          startIcon={<Building2 className="w-4 h-4" />}
          endIcon={<ExternalLink className="w-4 h-4" />}
          onClick={() => trackEvent(analyticsEvents.companyClick)}
        >
          Visitar site da Guidetech
        </Button>
        <Button
          as="a"
          href={socialLinks.companyInstagram}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
          startIcon={<InstagramIcon className="w-4 h-4" />}
          onClick={() => trackEvent(analyticsEvents.companyInstagramClick)}
        >
          Instagram Guidetech
        </Button>
        <Button
          as="a"
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
          startIcon={<WhatsAppIcon className="w-4 h-4 text-emerald-500" />}
          onClick={() => trackEvent(analyticsEvents.whatsappClick)}
        >
          Falar sobre projeto
        </Button>
      </div>
    </Section>
  )
}
