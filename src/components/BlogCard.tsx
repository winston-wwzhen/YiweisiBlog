import { Link } from 'react-router-dom'
import type { BlogPost } from '../types'
import { formatDate } from '../lib/markdown'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
      <div className="flex h-32 sm:h-40 items-center justify-center bg-muted/30 text-muted-foreground/50 border-b relative group overflow-hidden">
        {/* Abstract decorative pattern instead of an image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700" />
        <span className="text-4xl shadow-inner animate-pulse-glow">📝</span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-3 flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime} 分钟阅读</span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-xl font-semibold leading-tight">
          <Link
            to={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mb-4 line-clamp-3 text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          阅读更多
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}