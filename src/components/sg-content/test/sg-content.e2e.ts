import { newE2EPage } from '@stencil/core/testing';

describe('sg-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sg-content></sg-content>');

    const element = await page.find('sg-content');
    expect(element).toHaveClass('hydrated');
  });
});
