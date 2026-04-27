type BrandLogoProps = {
  maxWidth?: number;
  alt?: string;
  src?: string;
  radius?: string | number;
};

export function BrandLogo({
  maxWidth = 160,
  alt = "Melvin Mihaylov",
  src = "/images/mmlogo.png",
  radius,
}: BrandLogoProps) {
  return (
    <img
      alt={alt}
      src={src}
      style={{
        display: "block",
        width: "100%",
        maxWidth,
        height: "auto",
        borderRadius: radius,
      }}
    />
  );
}
