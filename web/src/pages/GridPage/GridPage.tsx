import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Articles } from '../Articles'
import HrTitleLine from 'src/components/HrTitleLine/HrTitleLine'

const GridPage = () => {
  return (
    <>
      <MetaTags
        title="Grid"
        // description="Grid description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="grid min-h-screen place-items-center">
        <div className="grid max-w-6xl gap-4 p-4 xs:grid-cols-2 xs:p-8 md:grid-cols-3 lg:gap-6">
          <h1 className="text-4xl font-extrabold text-center xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl">
            <span className="self-center md:col-span-3">Raj's Rope Knots</span>
          </h1>
          {/* <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            hic itaque alias officiis.
          </p> */}

          {Articles.map((article) => (
            <>
              <div className="prose text-blue-700 border-2 border-blue-700 rounded-2xl">
                {article.image && (
                  <img
                    src={article.image}
                    className="w-full mx-auto bg-white rounded-t-2xl min-h-[300px] max-h-[300px] object-contain"
                    alt="rope"
                  />
                )}

                {!article.image && <div className="p-2"></div>}

                {/* <div className="py-8">{article.title}</div> */}
                <div className="pt-2 mx-2">
                  <HrTitleLine color="blue-700">{article.title}</HrTitleLine>
                </div>

                <div className="pt-4"></div>
                {/* <h2 className="border-t-2 border-blue-500">{article.title}</h2> */}
                <div className="pb-1">
                  {article.steps.map((step) => (
                    <ul className="w-4/5 mx-auto">
                      <li className="">{step}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </>
          ))}

          {/*
          <p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit, and some
            more.
          </p> */}
        </div>
      </div>
    </>
  )
}

export default GridPage
