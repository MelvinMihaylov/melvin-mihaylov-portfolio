type BrandLogoProps = {
  maxWidth?: number;
  alt?: string;
};

export function BrandLogo({
  maxWidth = 160,
  alt = "Melvin Mihaylov",
}: BrandLogoProps) {
  return (
    <img
      alt={alt}
      src="/images/mmlogo.png"
      style={{
        width: "100%",
        maxWidth,
        height: "auto",
      }}
    />
  );
}
