import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="prose min-w-full bg-gray-200">
      <MetaTags
        title="Raj's Rope Knots & Hitches"
        description="Rajs Rope Knot & Hitched"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1 className="text-center">Raj's Rope Knots &amp; Hitches</h1>

      <div className="w-3/4 mx-auto bg-white px-24 py-12">
        <h2>Figure 8 knot - free hand</h2>
        <ul>
          <li>bight - facing up</li>
          <li>over and under</li>
          <li>through the front</li>
        </ul>
        <h2>Figure 8 follow thru</h2>
        <ul>
          <li>bight - facing down</li>
          <li>over</li>
          <li>around back</li>
          <li>over and through loop</li>
          <li>end through biner</li>
          <li>follow rope back</li>
        </ul>
        <h2>Clove hitch</h2>
        <ul>
          <li>bight - right over left</li>
          <li>second bight - right over left</li>
          <li>second bight - being first</li>
          <li>clip in</li>
          <li>pull tight</li>
        </ul>
        <h2>Barrel Knot</h2>
        <ul>
          <li>left hand - hold rope facing right</li>
          <li>wrap around hand - three times</li>
          <li>take end under all three loops - left to right</li>
        </ul>
        <h2>Double Fisherman knot</h2>
        <ul>
          <li>create loop</li>
          <li>or connect two same size ropes</li>
        </ul>
        <h2>Prusik Hitch</h2>
        <ul>
          <li>use loop</li>
        </ul>
        <h2>Bowline - fixed</h2>
        <ul>
          <li>bight down -left over right</li>
          <li>end trough loop - from back</li>
          <li>end around attachment</li>
          <li>follow rope around knot</li>
        </ul>
        <h2>Bowline - one hand</h2>
        <h2>Girth hitch</h2>
        <ul>
          <li>uses loop</li>
          <li>loop around post</li>
          <li>pull through loop</li>
        </ul>
        <h2>Taut Line hitch</h2>
        <h2>Stopper knot</h2>
      </div>
    </div>
  )
}

export default HomePage
