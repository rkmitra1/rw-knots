import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Articles = [
  {
    title: 'Figure 8 knot - free hand',
    steps: ['bight - facing up', 'over and under', 'through the front'],
  },
  {
    title: 'Clove hitch',
    steps: [
      'bight - right over left',
      'second bight - right over left',
      'second bight - being first',
      'clip in',
      'pull tight',
    ],
  },
  {
    title: 'Barrel Knot',
    steps: [
      'left hand - hold rope facing right',
      'wrap around hand - three times',
      'take end under all three loops - left to right',
    ],
  },

  {
    title: 'Double Fisherman knot',
    steps: ['create loop', 'or connect two same size ropes'],
  },
  {
    title: 'Prusik Hitch',
    steps: ['use loop'],
  },
  {
    title: 'Bowline - fixed',
    steps: [
      'knot',
      'end trough loop',
      'end around attachment',
      'follow rope back around knot',
    ],
  },
  {
    title: 'Bowline - one hand',
    steps: [
      'bight up',
      'bight around both standing lines',
      'pull through loop',
    ],
  },
  {
    title: 'Girth Hitch',
    steps: ['bight around attachment', 'pull through loop'],
  },
  {
    title: 'Taut Line Hitch',
    steps: [
      'bight in rope',
      'pull bight from bottom rope throuch bight',
      'tighten up',
      'pull bottom through created loop',
      'pull to tighten',
      'lock by: pull free end through loop, two half hitches',
    ],
  },
  {
    title: 'Ashley’s Stopper Knot',
    steps: [
      'Take end, loop, and tie knot around working line,',
      'pull free end through the loop',
      'tighten up',
    ],
  },
  {
    title: 'Double Overhand Stopper Knot',
    steps: ['overhand bight', 'pull end around bight twice', 'pull to tighten'],
  },
]

const HomePage = () => {
  return (
    <div className="prose min-w-full bg-gray-200">
      <MetaTags
        title="Raj's Rope Knots & Hitches"
        description="Rajs Rope Knot & Hitches"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1 className="text-center bg-gray-100 text-white py-2">
        Raj's Rope Knots &amp; Hitches
      </h1>

      <div className=" md:w-3/4 mx-auto bg-white px-4 pt-2 md:px-16">
        {Articles.map((article) => (
          <>
            <h2 className="border-t-2 border-blue-500">{article.title}</h2>
            <div className="pb-1">
              {article.steps.map((step) => (
                <ul className="mx-auto w-4/5">
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
