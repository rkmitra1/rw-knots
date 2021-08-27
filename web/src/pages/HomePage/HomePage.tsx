import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HrTitleLine from 'src/components/HrTitleLine/HrTitleLine'
import TitleLine from 'src/components/TitleLine/TitleLine'
import { Articles } from '../Articles'

const HomePage = () => {
  return (
    <div className="min-w-full prose bg-gray-200">
      <MetaTags
        title="Raj's Rope Knots & Hitches"
        description="Rajs Rope Knot & Hitches"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1 className="py-2 text-center text-white bg-gray-100">
        Raj's Rope Knots &amp; Hitches
      </h1>

      <div className="px-4 pt-2 mx-auto bg-white md:w-3/4 md:px-16">
        {Articles.map((article) => (
          <>
            {/* <div className="relative block pb-4">
              <div className="absolute left-0 w-1/2 border-b-2 border-black top-3"></div>
              <div className="absolute left-1/2">
                <div className="relative z-30 px-2 bg-white -left-1/2 top-1/2">
                  {article.title}
                </div>
              </div>
              <div className="absolute right-0 w-1/2 border-b-2 border-black top-3"></div>
            </div> */}

            <div className="py-8">
              <HrTitleLine color="blue-700">{article.title}</HrTitleLine>
            </div>

            {article.image && (
              <img
                src={article.image}
                className="w-[200px] mx-auto pb-4"
                alt="rope"
              />
            )}

            {/* <h2 className="border-t-2 border-blue-500">{article.title}</h2> */}
            <div className="pb-1">
              {article.steps.map((step) => (
                <ul className="w-4/5 mx-auto">
                  <li className="">{step}</li>
                </ul>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default HomePage
