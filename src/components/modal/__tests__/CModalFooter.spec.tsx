import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CModalFooter } from '../../../index'

test('loads and displays CModalFooter component', async () => {
  const { container } = render(<CModalFooter>Test</CModalFooter>)
  expect(container).toMatchSnapshot()
})

test('CModalFooter customize', async () => {
  const { container } = render(<CModalFooter className="bazinga">Test</CModalFooter>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('modal-footer')
})
