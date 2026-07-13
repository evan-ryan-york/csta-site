import Image from "next/image";
import type { Video } from "@/lib/resources";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-foreground/10 transition hover:border-foreground/30"
    >
      <div className="relative aspect-video overflow-hidden bg-foreground/5">
        <Image
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm transition-transform group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-0.5 h-5 w-5 text-white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/45">
          {video.show}
        </p>
        <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight">
          {video.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-foreground/65">{video.guest}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/60 transition group-hover:text-foreground">
          Watch <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </a>
  );
}
