import type { EditArticleById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ArticleForm from 'src/components/Article/ArticleForm'

export const QUERY = gql`
  query EditArticleById($id: Int!) {
    article: article(id: $id) {
      id
      title
      image
      body
    }
  }
`
const UPDATE_ARTICLE_MUTATION = gql`
  mutation UpdateArticleMutation($id: Int!, $input: UpdateArticleInput!) {
    updateArticle(id: $id, input: $input) {
      id
      title
      image
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ article }: CellSuccessProps<EditArticleById>) => {
  const [updateArticle, { loading, error }] = useMutation(UPDATE_ARTICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Article updated')
      navigate(routes.articles())
    },
  })

  const onSave = (input, id) => {
    updateArticle({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Article {article.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ArticleForm article={article} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
