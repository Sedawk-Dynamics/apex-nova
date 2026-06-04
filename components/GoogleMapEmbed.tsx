// Reusable, key-less Google Maps iframe embed.
// Defaults to the verified "APEXNOVA LOGISTICS INDIA PRIVATE LIMITED" place embed
// (see MAP_EMBED_SRC in lib/site.ts). Lazy-loaded via native iframe `loading="lazy"`.

import { MAP_EMBED_SRC } from "@/lib/site";

type GoogleMapEmbedProps = {
  /** Override the full embed src URL. Defaults to the Apexnova place embed. */
  src?: string;
  /** Accessible title for the iframe (screen-reader label). */
  title?: string;
  /** Extra Tailwind classes for the wrapping container. */
  className?: string;
};

export default function GoogleMapEmbed({
  src: srcProp,
  title = "Apexnova Logistics India Pvt Ltd — Office Location",
  className = "",
}: GoogleMapEmbedProps) {
  const src = srcProp ?? MAP_EMBED_SRC;

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
