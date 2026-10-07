import type { LandingContent } from "@/content";
import { Asterisk } from "lucide-react";
import { Fragment } from "react";

type CraftStripProps = {
  content: LandingContent;
};

/**
 * Infinite marquee of disciplines. The track holds the list twice so the
 * -50% translate loops seamlessly.
 */
export function CraftStrip({ content }: CraftStripProps) {
  const items = content.marquee;

  return (
    <div className="craft-strip" aria-hidden="true">
      <div className="craft-track">
        {[0, 1].map((copy) => (
          <div key={copy}>
            {items.map((item) => (
              <Fragment key={`${copy}-${item}`}>
                <span>{item}</span>
                <Asterisk size={20} />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
