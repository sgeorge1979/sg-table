import { newSpecPage } from '@stencil/core/testing';
import { SgContent } from '../sg-content';

describe('sg-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgContent],
      html: `<sg-content></sg-content>`,
    });
    expect(page.root).toEqualHtml(`
      <sg-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sg-content>
    `);
  });
});
