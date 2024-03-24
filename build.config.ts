import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    'index.ts',
  ],
  rollup: {
    emitCJS: true,
  },
})
