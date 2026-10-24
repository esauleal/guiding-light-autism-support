"use client";

import { useState } from "react";
import { Share2, Check, Link as LinkIcon } from "lucide-react";

type ArticleShareButtonProps = {
  title: string;
};

export default function ArticleShareButton({
  title,
}: ArticleShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        ) {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this article link:", url);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Share ${title}`}
      title="Share this article"
      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
    >
      {copied ? (
        <>
          <Check size={18} />
          Link Copied!
        </>
      ) : (
        <>
          <Share2 size={18} />
          Share
        </>
      )}
    </button>
  );
}
