import * as React from 'react'
import { render /* ,screen */ /*,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CBreadcrumb, CBreadcrumbItem } from '../../../index'

test('loads and displays CBreadcrumb component', async () => {
  const { container } = render(<CBreadcrumb></CBreadcrumb>)
  expect(container).toMatchSnapshot()
})

test('CBreadcrumb customize', async () => {
  const { container } = render(
    <CBreadcrumb className="bazinga">
      <CBreadcrumbItem>Test A</CBreadcrumbItem>
      <CBreadcrumbItem active={false}>Test B</CBreadcrumbItem>
      <CBreadcrumbItem active={true}>Test C</CBreadcrumbItem>
    </CBreadcrumb>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
})
