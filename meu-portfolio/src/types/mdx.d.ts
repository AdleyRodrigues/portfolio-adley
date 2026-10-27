declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export type MDXProps = {
    components?: Record<string, ComponentType<any>>
    [key: string]: unknown
  }

  const MdxComponent: ComponentType<MDXProps>
  export default MdxComponent
}
