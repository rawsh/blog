import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeImgSize from "rehype-img-size"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"
import rehypeAutolink from "rehype-autolink-headings"

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))


export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
    remarkGfm,
    remarkToc
    ],
    rehypePlugins: [
    [rehypeImgSize, { dir: "public" }] as any,
    // rehypeHighlight
    rehypeSlug,
    rehypeAutolink
    ]
  },
})