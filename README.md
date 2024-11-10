This is a [Next.js](https://nextjs.org/) blog powered by [Notion](https://notion.so)

# Tech Stack

- NextJs 15 app router
- React-markdown for markdown rendering
- Lucide React for icons
- Tailwindcss and Shadcn/ui for styles
- Shiki for markdown syntax highlighting
- Notion JS client and react-notion-x
- Vercel for automated git synced deployments

## Getting Started for forkers

Create a Notion database with the following fields.

* Name - The title of the blog post.
* Slug - The URL of a post.
* Description - A list of users that wrote the post.
* Tags - The URL of the meta image for a post
* Published - Indicates whether the post is published or not. Only the published posts will be displayed on the blog.
* Date- The date the post was published

Follow [Notion's getting started guide](https://developers.notion.com/docs/getting-started#step-1-create-an-integration) to get a NOTION_TOKEN and a NOTION_DATABASE_ID, then add them to the .env file.

```
NOTION_TOKEN=
DATABASE_ID=
```

Here is a [sample Notion database](https://www.notion.so/marygathoni/4fc4211e751f4d66929791c61bc1054f?v=32fe9dd175774d57a32a79fc787e3fd2) you can duplicate.

Run the development server:

```bash
npm run dev
# or
yarn dev
```
