import type { ComponentProps } from 'react'
import {
  WhatsappLogo,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  type IconProps,
} from '@phosphor-icons/react'

export type CustomIconProps = IconProps & ComponentProps<'svg'>

export function WhatsAppIcon({ className = '', weight = 'bold', ...props }: CustomIconProps) {
  return <WhatsappLogo className={`shrink-0 ${className}`} weight={weight} aria-hidden="true" {...props} />
}

export function LinkedInIcon({ className = '', weight = 'bold', ...props }: CustomIconProps) {
  return <LinkedinLogo className={`shrink-0 ${className}`} weight={weight} aria-hidden="true" {...props} />
}

export function GitHubIcon({ className = '', weight = 'bold', ...props }: CustomIconProps) {
  return <GithubLogo className={`shrink-0 ${className}`} weight={weight} aria-hidden="true" {...props} />
}

export function InstagramIcon({ className = '', weight = 'bold', ...props }: CustomIconProps) {
  return <InstagramLogo className={`shrink-0 ${className}`} weight={weight} aria-hidden="true" {...props} />
}
