import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ArticleLayoutProps = {
  children: React.ReactNode
}

const ArticlesLayout = ({ children }: ArticleLayoutProps) => {
  return (
    <div className="">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.articles()} className="rw-link">
            Articles
          </Link>
        </h1>
        <Link to={routes.newArticle()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Article
        </Link>
      </header>
      <main className="">{children}</main>
    </div>
  )
}

export default ArticlesLayout
