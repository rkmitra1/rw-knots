import { render } from '@redwoodjs/testing/web'

import GridPage from './GridPage'

describe('GridPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GridPage />)
    }).not.toThrow()
  })
})
