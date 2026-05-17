import Image from "next/image";

type BrandLogoProps = {
  maxWidth?: number;
  alt?: string;
  src?: string;
  radius?: string | number;
  priority?: boolean;
};

export function BrandLogo({
  maxWidth = 160,
  alt = "Melvin Mihaylov",
  src = "/images/mmlogo.png",
  radius,
  priority = false,
}: BrandLogoProps) {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        maxWidth,
        aspectRatio: "1342 / 764",
        borderRadius: radius,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes={`(max-width: 768px) min(60vw, ${maxWidth}px), ${maxWidth}px`}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
}
