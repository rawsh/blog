import RSS from 'rss'
import { allPosts } from '../.contentlayer/generated/Post/_index.mjs'
import { writeFileSync } from 'fs'

async function generateFeed() {
  const feed = new RSS({
    title: 'raw.sh',
    site_url: 'https://raw.sh',
    feed_url: 'https://raw.sh/feed.xml',
    image_url: 'https://raw.sh/author-image-full.png',
    language: 'en_US',
  })

  await Promise.all(
    allPosts
      .filter(sheet => sheet.date != null)
      .map(async sheet => {
        console.log(sheet.title)
        feed.item({
          title: sheet.title,
          url: `https://raw.sh/${sheet.url}`,
          guid: sheet.slug,
          date: sheet.date,
          description: sheet.description,
          image_url: sheet.image,
        })
      }),
  )

  const body = feed.xml({ indent: true })
  writeFileSync('./.next/static/feed.xml', body)
}

generateFeed()
