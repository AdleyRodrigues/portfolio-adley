import { Mail, Building2, ExternalLink } from 'lucide-react'
import { Section } from '../Section'
import { Button } from '../ui/Button'
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from '../ui/Icons'
import { analyticsEvents, socialLinks } from '../../data/siteContent'
import { trackEvent } from '../../lib/analytics'

export function ContactSection() {
  return (
    <Section
      id="contato"
      eyebrow="Vamos conversar"
      title="Se você precisa elevar a camada front-end sem perder pragmatismo, entre em contato."
    >
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-10 shadow-xs">
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
          Disponível para posições sênior e de liderança técnica em Front-End, React, TypeScript e arquitetura de produtos digitais de alta criticidade.
        </p>
        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Vamos marcar uma conversa sobre como posso agregar valor ao seu time ou produto.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button
            as="a"
            href={socialLinks.email}
            startIcon={<Mail className="w-4 h-4" />}
            onClick={() => trackEvent(analyticsEvents.contactEmailClick)}
          >
            Falar comigo por e-mail
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
            WhatsApp
          </Button>

          <Button
            as="a"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            startIcon={<LinkedInIcon className="w-4 h-4 text-sky-500" />}
            onClick={() => trackEvent(analyticsEvents.linkedinClick)}
          >
            LinkedIn
          </Button>

          <Button
            as="a"
            href={socialLinks.company}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            startIcon={<Building2 className="w-4 h-4" />}
            endIcon={<ExternalLink className="w-3.5 h-3.5" />}
            onClick={() => trackEvent(analyticsEvents.companyClick)}
          >
            Guidetech
          </Button>

          <Button
            as="a"
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            startIcon={<InstagramIcon className="w-4 h-4 text-pink-500" />}
            onClick={() => trackEvent(analyticsEvents.instagramClick)}
          >
            Instagram
          </Button>
        </div>
      </div>
    </Section>
  )
}
