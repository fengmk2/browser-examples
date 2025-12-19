import { expect, test } from '@voidzero-dev/vite-plus/test'
import { render } from '@testing-library/preact'
import HelloWorld from '../src/HelloWorld'

test('renders name', () => {
  const { getByText } = render(<HelloWorld name="Vitest" />)
  const element = getByText('Hello Vitest!')
  expect(element).toBeInTheDocument()
})
