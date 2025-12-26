import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export interface Project {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  published: boolean
  content: string
  href: string
  github: string
  img?: string
  keyFeatures?: string[]
  screenshots?: string[]
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "")
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "",
        tags: data.tags || [],
        published: data.published !== false,
        content,
        href: data.href || "",
        github: data.github || "",
        img: data.img || null,
        keyFeatures: data.keyFeatures || [],
        screenshots: data.screenshots || [],
      }
    })
    .filter((project) => project.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return allProjects
}

export function getAllProjectTags(): string[] {
  const projects = getAllProjects()
  const tags = new Set<string>()
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getProjectsByTag(tag: string): Project[] {
  return getAllProjects().filter((project) =>
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getProject(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      author: data.author || "",
      tags: data.tags || [],
      published: data.published !== false,
      content,
      href: data.href || "",
      github: data.github || "",
      img: data.img || null,
      keyFeatures: data.keyFeatures || [],
      screenshots: data.screenshots || [],
    }
  } catch {
    return null
  }
}