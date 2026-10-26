import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'solid' | 'ghost'
type ButtonSize = 'small' | 'medium'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  startIcon?: ReactNode
  endIcon?: ReactNode
  className?: string
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
    href?: never
  }

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  as = 'button',
  variant = 'solid',
  size = 'medium',
  startIcon,
  endIcon,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all cursor-pointer select-none active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500/50'

  const sizeClasses =
    size === 'small' ? 'px-3.5 py-1.5 text-xs sm:text-sm gap-1.5' : 'px-5 py-2.5 text-sm sm:text-base gap-2'

  const variantClasses =
    variant === 'solid'
      ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-md shadow-indigo-500/20'
      : 'backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-100 shadow-xs'

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`

  if (as === 'a') {
    return (
      <a className={combinedClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {startIcon && <span className="inline-flex shrink-0 items-center">{startIcon}</span>}
        <span>{children}</span>
        {endIcon && <span className="inline-flex shrink-0 items-center">{endIcon}</span>}
      </a>
    )
  }

  return (
    <button type="button" className={combinedClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {startIcon && <span className="inline-flex shrink-0 items-center">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="inline-flex shrink-0 items-center">{endIcon}</span>}
    </button>
  )
}
