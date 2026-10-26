import { Helmet } from 'react-helmet-async'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SkipLink } from '../components/SkipLink'
import { HeroSection } from '../components/sections/HeroSection'
import { StatsSection } from '../components/sections/StatsSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { AboutSection } from '../components/sections/AboutSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ContactSection } from '../components/sections/ContactSection'
import { siteUrl, socialLinks } from '../data/siteContent'

const sameAsLinks = [socialLinks.linkedin, socialLinks.instagram, socialLinks.company, socialLinks.github].filter(
  (link) => !link.includes('SEU-USUARIO'),
)

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Adley Rodrigues de Castro',
    jobTitle: 'Senior Software Engineer | Front-End & Architecture',
    knowsAbout: ['React', 'TypeScript', 'Next.js', '.NET', 'C#', 'Front-End Architecture', 'Web Performance'],
    sameAs: sameAsLinks,
  },
}

export function HomePage() {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Adley Rodrigues | Engenheiro de Software Sênior</title>
        <meta
          name="description"
          content="Construindo arquiteturas escaláveis, React, TypeScript, ecossistema .NET e interfaces de alta performance."
        />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content="Adley Rodrigues | Engenheiro de Software Sênior" />
        <meta
          property="og:description"
          content="Construindo arquiteturas escaláveis, React, TypeScript, ecossistema .NET e interfaces de alta performance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/og/adley-portfolio.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adley Rodrigues | Engenheiro de Software Sênior" />
        <meta
          name="twitter:description"
          content="Construindo arquiteturas escaláveis, React, TypeScript, ecossistema .NET e interfaces de alta performance."
        />
        <meta name="twitter:image" content={`${siteUrl}/og/adley-portfolio.png`} />
        <script type="application/ld+json">{JSON.stringify(profileJsonLd)}</script>
      </Helmet>

      <SkipLink />
      <SiteHeader />

      <main id="conteudo-principal">
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  )
}
