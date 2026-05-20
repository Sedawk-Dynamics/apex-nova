// Reusable, key-less Google Maps iframe embed.
// Uses `?q=...&output=embed` format (no API key, no `pb` parameter).
// Lazy-loaded via native iframe `loading="lazy"` so it only fetches when scrolled into view.

const DEFAULT_QUERY =
  "Supertech+Eco+Village+1+Sector+1+Greater+Noida+West+Noida+UP+201306";

const DEFAULT_EMBED_SRC = `https://www.google.com/maps?q=${DEFAULT_QUERY}&output=embed`;

type GoogleMapEmbedProps = {
  /** Override the place query string. Use URL-encoded format (spaces as `+`). */
  query?: string;
  /** Accessible title for the iframe (screen-reader label). */
  title?: string;
  /** Extra Tailwind classes for the wrapping container. */
  className?: string;
};

export default function GoogleMapEmbed({
  query,
  title = "Apexnova Logistics Office Location",
  className = "",
}: GoogleMapEmbedProps) {
  const src = query
    ? `https://www.google.com/maps?q=${query}&output=embed`
    : DEFAULT_EMBED_SRC;

  return (
    <div
      className={`w-full h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden ${className}`}
    >
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
