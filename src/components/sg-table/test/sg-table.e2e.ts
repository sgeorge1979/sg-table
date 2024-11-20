import { newE2EPage } from '@stencil/core/testing';

describe('sg-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sg-table></sg-table>');

    const element = await page.find('sg-table');
    expect(element).toHaveClass('hydrated');
  });
});
