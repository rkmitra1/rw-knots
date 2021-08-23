import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const articles = () => {
  return db.article.findMany()
}

export const article = ({ id }: Prisma.ArticleWhereUniqueInput) => {
  return db.article.findUnique({
    where: { id },
  })
}

interface CreateArticleArgs {
  input: Prisma.ArticleCreateInput
}

export const createArticle = ({ input }: CreateArticleArgs) => {
  return db.article.create({
    data: input,
  })
}

interface UpdateArticleArgs extends Prisma.ArticleWhereUniqueInput {
  input: Prisma.ArticleUpdateInput
}

export const updateArticle = ({ id, input }: UpdateArticleArgs) => {
  return db.article.update({
    data: input,
    where: { id },
  })
}

export const deleteArticle = ({ id }: Prisma.ArticleWhereUniqueInput) => {
  return db.article.delete({
    where: { id },
  })
}
