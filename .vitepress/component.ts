export interface ComponentConfig {
  name: string
  since?: string
}

export interface ComponentGroup {
  name: string
  components: ComponentConfig[]
}

export function getComponentConfig(): ComponentGroup[] {
  return [
    {
      name: 'basis',
      components: [
        { name: 'Button' },
        { name: 'Icon' },
        { name: 'Linker' },
        { name: 'Typography' }
      ]
    }
  ]
}
