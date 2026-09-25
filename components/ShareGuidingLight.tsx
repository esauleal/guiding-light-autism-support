"use client";

import { useState } from "react";
import {
  Heart,
  Share2,
  Check,
  Mail,
  MessageCircle,
  Link as LinkIcon,
} from "lucide-react";

export default function ShareGuidingLight() {
  const [copied, setCopied] = useState(false);

  const websiteUrl = "https://guidinglightautismsupport.org";

  const shareText =
    "I came across Guiding Light Autism Family Support and thought this might be helpful for you or your family. They help families navigate autism resources, services, and support.";

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Guiding Light Autism Family Support",
          text: shareText,
          url: websiteUrl,
        });
        return; 
      }

      await navigator.clipboard.writeText(`${shareText}\n\n${websiteUrl}`);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      // Closing the share window without sharing is okay.
      console.log("Share cancelled or unavailable.", error);
    }
  }
function shareByEmail() {
  const subject = encodeURIComponent(
    "Guiding Light Autism Family Support"
  );

  const body = encodeURIComponent(
    `${shareText}\n\n${websiteUrl}`
  );

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function shareByText() {
  const message = encodeURIComponent(
    `${shareText}\n\n${websiteUrl}`
  );

  window.location.href = `sms:?&body=${message}`;
}

function shareOnFacebook() {
  const facebookUrl =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      websiteUrl
    )}`;

  window.open(facebookUrl, "_blank", "noopener,noreferrer");
}

async function copyLink() {
  await navigator.clipboard.writeText(
    `${shareText}\n\n${websiteUrl}`
  );

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 3000);
}
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-lg md:p-12">
          <div className="mb-5 flex justify-center">
            <div className="rounded-2xl bg-blue-100 p-4">
              <Heart className="h-10 w-10 text-blue-700" />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Help Another Family Find Support
          </p>

          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
            Know a Family Who Could Use Some Support?
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            You may not need Guiding Light today, but you might know a parent,
            caregiver, or family who could benefit from a little guidance.
            Share Guiding Light with them and let them decide if we're the
            right resource for their family.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
  <button
    type="button"
    onClick={handleShare}
    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
  >
    <Share2 className="h-5 w-5" />
    Share Guiding Light
  </button>

  <button
    type="button"
    onClick={copyLink}
    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-700 bg-white px-7 py-4 font-bold text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
  >
    {copied ? (
      <>
        <Check className="h-5 w-5" />
        Link Copied!
      </>
    ) : (
      <>
        <LinkIcon className="h-5 w-5" />
        Copy Link
      </>
    )}
  </button>
</div>

          <p className="mt-4 text-sm text-gray-500">
            Share by text, email, social media, or your favorite messaging app.
          </p>
        </div>
      </div>
    </section>
  );
}