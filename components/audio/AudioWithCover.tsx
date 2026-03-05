import React from "react";

type AudioWithCoverProps = {
  src: string;
  title?: string;
  artist?: string;
  coverImage: string;
  alt?: string;
};

export default function AudioWithCover({
  src,
  title = "Audio",
  artist,
  coverImage,
  alt,
}: AudioWithCoverProps) {
  return (
    <figure className="max-w-sm rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <img
        src={coverImage}
        alt={alt ?? `Carátula de ${title}`}
        className="mb-3 aspect-square w-full rounded-xl object-cover"
      />

      <figcaption className="mb-3">
        <p className="text-base font-semibold text-neutral-900">{title}</p>
        {artist ? <p className="text-sm text-neutral-600">{artist}</p> : null}
      </figcaption>

      <audio controls preload="metadata" className="w-full" aria-label={`Reproductor de ${title}`}>
        <source src={src} />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </figure>
  );
}
