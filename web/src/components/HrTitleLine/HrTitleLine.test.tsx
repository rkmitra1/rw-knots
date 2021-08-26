import { render } from '@redwoodjs/testing/web'

import HrTitleLine from './HrTitleLine'

describe('HrTitleLine', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HrTitleLine />)
    }).not.toThrow()
  })
})
