import { render } from '@redwoodjs/testing'

import TitleLine from './TitleLine'

describe('TitleLine', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TitleLine />)
    }).not.toThrow()
  })
})
