import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HrTitleLine from 'src/components/HrTitleLine/HrTitleLine'
import TitleLine from 'src/components/TitleLine/TitleLine'

const Articles = [
  {
    title: 'Figure 8 knot - free hand',
    image: 'Rope2.png',
    steps: ['bight - facing up', 'over and under', 'through the front'],
  },
  {
    title: 'Clove hitch',
    image: 'clove_hitch_b.png',
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
    image: 'barrel.png',
    steps: [
      'left hand - hold rope facing right',
      'wrap around hand - three times',
      'take end under all three loops - left to right',
    ],
  },

  {
    title: 'Double Fisherman knot',
    image: 'double_fishermans.png',
    steps: [
      'can create loop or connect two same size ropes',
      'rope ends facing each other',
      'loop right-facing end over left-facing rope twice',
      'pull end through to knot',
      'turn ropes over (so right is now facing left)',
      'repeat: (previous left-facing end is now pointing right)',
      'loop right-facing end over left-facing rope twice',
      'pull end through to knot',
    ],
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
  {
    title: 'Double Figure 8 Knot',
    steps: ['like a regular figure 8 knot with two bunny ears'],
  },
  {
    title: 'EDK - Eurpean Death Knot',
    steps: [
      'simple, strong, knot',
      'two ends, facing same way',
      'overhand knot and dress',
    ],
  },
]

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
