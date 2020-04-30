import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '../models/post'
import remark from 'remark'
import html from 'remark-html'

interface Result {
  date: Date
  title: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const result = matter(fileContents).data as Result

    return {
      id,
      contentHtml: '',
      ...result
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPost(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
