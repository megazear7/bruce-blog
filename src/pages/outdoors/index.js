import { html } from 'orison';
import client from '../../contentful.js';
import blogList from '../../partials/blog-list.js';

export default async context => {
  const entries = await client.getEntries({
    'content_type': 'blogPost',
    'fields.tags': context.data.tag
  });

  return html`
    ${blogList(entries.items)}
  `;
};
