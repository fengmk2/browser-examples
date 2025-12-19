import { expect, test } from '@voidzero-dev/vite-plus/test'
import {getCurrentSuite} from '@voidzero-dev/vite-plus/test/suite'
import { page } from '@voidzero-dev/vite-plus/test/browser'
import HelloWorld from '../src/HelloWorld'
getCurrentSuite().suite

test('renders name', async () => {
  const parent = HelloWorld({ name: 'Vitest' })
  const hello = page.getByText('Hello Vitest!')
  await expect.element(hello).toBeInTheDocument()
})
