import ArticleCell from 'src/components/Article/ArticleCell'

type ArticlePageProps = {
  id: Int
}

const ArticlePage = ({ id }: ArticlePageProps) => {
  return <ArticleCell id={id} />
}

export default ArticlePage
