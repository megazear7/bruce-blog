import { html } from 'orison';
import client from '../../contentful.js';

export default async context => {
  const entry = await client.getEntry(context.data.pageId);

  return html`
    <section>${context.mdString(entry.fields.body)}</section>
  `;
};
