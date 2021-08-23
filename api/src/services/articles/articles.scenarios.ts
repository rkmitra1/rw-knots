import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ArticleCreateArgs>({
  article: { one: { title: 'String2236364' }, two: { title: 'String2864561' } },
})

export type StandardScenario = typeof standard
