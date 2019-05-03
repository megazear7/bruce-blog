import { html } from 'orison';

export default async blogs => {
  const firstBlog = blogs.shift();

  return html`
    <section>
      <h2>${firstBlog.fields.title}</h2>
      <div><img alt="${firstBlog.fields.heroImage.fields.description}" src="${firstBlog.fields.heroImage.fields.file.url}"></div>
      <p>${firstBlog.fields.description}</p>
      <p><a href="/${firstBlog.fields.slug}.html">Read More</a></p>
    </section>
    ${blogs.map(blog => html`
      <section class="small-blog-overview">
        <h2>${blog.fields.title}</h2>
        <div><img alt="${blog.fields.heroImage.fields.description}" src="${blog.fields.heroImage.fields.file.url}"></div>
        <p>${blog.fields.description}</p>
        <p><a href="/${blog.fields.slug}.html">Read More</a></p>
      </section>
    `)}
  `;
};
