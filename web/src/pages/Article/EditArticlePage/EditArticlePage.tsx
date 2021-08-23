import EditArticleCell from 'src/components/Article/EditArticleCell'

type ArticlePageProps = {
  id: Int
}

const EditArticlePage = ({ id }: ArticlePageProps) => {
  return <EditArticleCell id={id} />
}

export default EditArticlePage
