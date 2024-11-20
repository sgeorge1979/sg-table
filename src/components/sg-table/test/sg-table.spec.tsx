import { newSpecPage } from '@stencil/core/testing';
import { SgTable } from '../sg-table';

describe('sg-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgTable],
      html: `<sg-table></sg-table>`,
    });
    expect(page.root).toEqualHtml(`
      <sg-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sg-table>
    `);
  });
});
