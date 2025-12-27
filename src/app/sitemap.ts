import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { getAllProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://dagkanbayramoglu.com';

  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const projects = getAllProjects().map((project) => ({
    url: `${baseURL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const routes = ['', '/blog', '/projects', '/resume'].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogPosts, ...projects];
}
