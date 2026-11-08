"use client";

import type { ExampleKey, ExamplePreview } from "@/content";
import { ArrowRight, Check, Search, ShoppingBag, Star, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import blogRoad from "../../../public/images/examples/blog-road.jpg";
import bookingSalon from "../../../public/images/examples/booking-salon.jpg";
import carInterior from "../../../public/images/examples/car-interior.jpg";
import carPolish from "../../../public/images/examples/car-polish.jpg";
import carWash from "../../../public/images/examples/car-wash.jpg";
import carWheel from "../../../public/images/examples/car-wheel.jpg";
import catalogueChair from "../../../public/images/examples/catalogue-chair.jpg";
import dropAudio from "../../../public/images/examples/drop-audio.jpg";
import dropDesk from "../../../public/images/examples/drop-desk.jpg";
import dropJuicer from "../../../public/images/examples/drop-juicer.jpg";
import dropLens from "../../../public/images/examples/drop-lens.jpg";
import dropSneakers from "../../../public/images/examples/drop-sneakers.jpg";
import menuDish from "../../../public/images/examples/menu-dish.jpg";
import portfolioCamera from "../../../public/images/examples/portfolio-camera.jpg";
import portfolioRoad from "../../../public/images/examples/portfolio-road.jpg";
import printFigures from "../../../public/images/examples/print-figures.jpg";
import printLion from "../../../public/images/examples/print-lion.jpg";
import printPrinter from "../../../public/images/examples/print-printer.jpg";
import printShop from "../../../public/images/examples/print-shop.jpg";
import shopVases from "../../../public/images/examples/shop-vases.jpg";

type DemoProps = { preview: ExamplePreview };

/**
 * The mocks are interactive: things that look clickable are clickable, and the
 * state they change is real. Each demo remounts when the showcase switches, so
 * state resets on its own.
 */

/** Static imports, so Next ships a tiny blurred preview with each photo. */
const PHOTOS = {
  "blog-road": blogRoad,
  "booking-salon": bookingSalon,
  "car-interior": carInterior,
  "car-polish": carPolish,
  "car-wash": carWash,
  "car-wheel": carWheel,
  "catalogue-chair": catalogueChair,
  "drop-audio": dropAudio,
  "drop-desk": dropDesk,
  "drop-juicer": dropJuicer,
  "drop-lens": dropLens,
  "drop-sneakers": dropSneakers,
  "menu-dish": menuDish,
  "portfolio-camera": portfolioCamera,
  "portfolio-road": portfolioRoad,
  "print-figures": printFigures,
  "print-lion": printLion,
  "print-printer": printPrinter,
  "print-shop": printShop,
  "shop-vases": shopVases,
};

type PhotoName = keyof typeof PHOTOS;

/** A stock photo filling its positioned parent; a blurred preview shows until it loads. */
function Photo({ src, sizes = "400px" }: { src: PhotoName; sizes?: string }) {
  return (
    <Image src={PHOTOS[src]} alt="" fill sizes={sizes} placeholder="blur" className="ex-photo" />
  );
}

/* ---------------------------------------------------------------- blog */
function BlogDemo({ preview }: DemoProps) {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="ex ex--blog">
      <article className="ex-blog-hero">
        <Photo src="blog-road" sizes="500px" />
        <b className="ex-blog-logo">{preview.brand}</b>
        <small>{preview.meta}</small>
        <h4>{preview.heading}</h4>
      </article>
      <aside className="ex-blog-side">
        <nav>
          {preview.nav.map((item, index) => (
            <span key={item} className={index === 0 ? "is-on" : undefined}>
              {item}
            </span>
          ))}
        </nav>
        {preview.items.map((item, index) => (
          <div key={item.label} className="ex-blog-post">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{item.label}</strong>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
        <div className="ex-blog-news">
          {preview.note}
          <button type="button" onClick={() => setSubscribed(true)} aria-pressed={subscribed}>
            {subscribed ? <Check size={12} /> : preview.cta}
          </button>
        </div>
      </aside>
    </div>
  );
}

/* ---------------------------------------------------------------- menu */
function MenuDemo({ preview }: DemoProps) {
  const [tab, setTab] = useState(1);

  return (
    <div className="ex ex--menu">
      <div className="ex-menu-photo">
        <Photo src="menu-dish" sizes="420px" />
        <b>{preview.brand}</b>
        <span>{preview.cta}</span>
      </div>
      <div className="ex-menu-list">
        <div className="ex-chips">
          {preview.nav.map((item, index) => (
            <button
              type="button"
              key={item}
              className={index === tab ? "is-on" : undefined}
              aria-pressed={index === tab}
              onClick={() => setTab(index)}
            >
              {item}
            </button>
          ))}
        </div>
        <h4>{preview.heading}</h4>
        {preview.items.map((item) => (
          <div key={item.label} className="ex-menu-item">
            <div>
              <strong>{item.label}</strong>
              <p>{item.detail}</p>
            </div>
            <em>{item.value}</em>
          </div>
        ))}
        <p className="ex-menu-qr">
          <i />
          {preview.meta}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- booking */
const SLOTS = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];
const TAKEN_SLOTS = ["10:00", "16:00"];

function BookingDemo({ preview }: DemoProps) {
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState("13:00");
  const [booked, setBooked] = useState(false);
  const picked = preview.items[day];

  return (
    <div className="ex ex--booking">
      <Photo src="booking-salon" sizes="800px" />
      <div className="ex-booking-copy">
        <b>{preview.brand}</b>
        <h4>{preview.heading}</h4>
        <p>{preview.meta}</p>
      </div>
      <div className="ex-booking-card">
        <strong>{preview.note}</strong>
        <div className="ex-booking-days">
          {preview.items.map((item, index) => (
            <button
              type="button"
              key={item.label}
              className={index === day ? "is-on" : undefined}
              aria-pressed={index === day}
              onClick={() => {
                setDay(index);
                setBooked(false);
              }}
            >
              {item.label}
              <b>{item.value}</b>
            </button>
          ))}
        </div>
        <div className="ex-booking-slots">
          {SLOTS.map((time) => (
            <button
              type="button"
              key={time}
              disabled={TAKEN_SLOTS.includes(time)}
              className={time === slot ? "is-on" : undefined}
              aria-pressed={time === slot}
              onClick={() => {
                setSlot(time);
                setBooked(false);
              }}
            >
              {time}
            </button>
          ))}
        </div>
        <button type="button" className="ex-booking-go" onClick={() => setBooked(true)}>
          {booked && <Check size={12} />}
          {preview.cta} · {picked.label} {picked.value}, {slot}
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- shop */
function ShopDemo({ preview }: DemoProps) {
  const [cart, setCart] = useState(2);

  return (
    <div className="ex ex--shop">
      <header className="ex-shop-head">
        <b>{preview.brand}</b>
        <nav>{preview.nav.join(" · ")}</nav>
        <span className="ex-cart">
          <ShoppingBag size={13} />
          <i key={cart}>{cart}</i>
        </span>
      </header>
      <div className="ex-shop-grid">
        <div className="ex-shop-feature">
          <Photo src="shop-vases" sizes="360px" />
          <h4>{preview.heading}</h4>
          <p>{preview.meta}</p>
        </div>
        {preview.items.map((item, index) => (
          <div key={item.label} className={`ex-shop-card ex-shop-card--${index}`}>
            <div className="ex-shop-img">
              <Photo src="shop-vases" sizes="1000px" />
            </div>
            <p>
              <span>{item.label}</span>
              <em>{item.value}</em>
            </p>
            <button type="button" onClick={() => setCart((count) => count + 1)}>
              {preview.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------- dropshipping */
const DROP_PHOTOS: PhotoName[] = ["drop-lens", "drop-juicer", "drop-audio", "drop-desk"];

function DropshippingDemo({ preview }: DemoProps) {
  const [cart, setCart] = useState(3);
  const [category, setCategory] = useState(0);

  return (
    <div className="ex ex--drop">
      <header className="ex-drop-head">
        <b>
          {preview.brand}
          <span>.</span>
        </b>
        <span className="ex-drop-search">
          <Search size={12} />
          {preview.meta}
        </span>
        <span className="ex-cart">
          <ShoppingBag size={13} />
          <i key={cart}>{cart}</i>
        </span>
      </header>
      <div className="ex-chips">
        {preview.nav.map((item, index) => (
          <button
            type="button"
            key={item}
            className={index === category ? "is-on" : undefined}
            aria-pressed={index === category}
            onClick={() => setCategory(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="ex-drop-grid">
        <div className="ex-drop-promo">
          <Photo src="drop-sneakers" sizes="340px" />
          <small>{preview.note}</small>
          <h4>{preview.heading}</h4>
          <span>
            {preview.cta} <ArrowRight size={11} />
          </span>
        </div>
        {preview.items.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className="ex-drop-tile"
            onClick={() => setCart((count) => count + 1)}
          >
            <span className="ex-drop-img">
              <Photo src={DROP_PHOTOS[index]} sizes="260px" />
              <u className={item.detail?.startsWith("−") ? "is-sale" : undefined}>{item.detail}</u>
            </span>
            <span className="ex-drop-meta">
              {item.label}
              <b>{item.value}</b>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- catalogue */
const SWATCHES = ["#1b1b1b", "#e9e4da", "#9fb8a8", "#c46a3b"];

function CatalogueDemo({ preview }: DemoProps) {
  const [swatch, setSwatch] = useState(0);

  return (
    <div className="ex ex--catalogue">
      <div className="ex-catalogue-photo">
        <Photo src="catalogue-chair" sizes="450px" />
        <b>{preview.brand}</b>
      </div>
      <div className="ex-catalogue-info">
        <small>{preview.note}</small>
        <h4>{preview.heading}</h4>
        <p>{preview.meta}</p>
        <div className="ex-swatches">
          {SWATCHES.map((color, index) => (
            <button
              type="button"
              key={color}
              style={{ background: color }}
              className={index === swatch ? "is-on" : undefined}
              aria-pressed={index === swatch}
              aria-label={color}
              onClick={() => setSwatch(index)}
            />
          ))}
        </div>
        <dl>
          {preview.items.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <span className="ex-catalogue-ask">{preview.cta}</span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- detailing */
const DETAILING_PHOTOS: PhotoName[] = ["car-polish", "car-wheel", "car-interior"];

function DetailingDemo({ preview }: DemoProps) {
  const [service, setService] = useState(0);

  return (
    <div className="ex ex--detailing">
      <div className="ex-detailing-hero">
        <Photo src="car-wash" sizes="500px" />
        <b>
          {preview.brand}
          <span>/</span>
        </b>
        <h4>
          {preview.heading} <span>{preview.emphasis}</span>
        </h4>
        <p>{preview.meta}</p>
        <span className="ex-detailing-cta">
          {preview.cta} · {preview.items[service].label}
        </span>
      </div>
      <div className="ex-detailing-side">
        {preview.items.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className={index === service ? "is-on" : undefined}
            aria-pressed={index === service}
            onClick={() => setService(index)}
          >
            <Photo src={DETAILING_PHOTOS[index]} sizes="340px" />
            <small>{String(index + 1).padStart(2, "0")}</small>
            <strong>{item.label}</strong>
            <span>{item.detail}</span>
            <em>{item.value}</em>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- print3d */
const PRINT_PHOTOS: PhotoName[] = ["print-lion", "print-figures", "print-shop"];

function Print3dDemo({ preview }: DemoProps) {
  return (
    <div className="ex ex--print">
      <div className="ex-print-hero">
        <Photo src="print-printer" sizes="420px" />
        <b>
          {preview.brand}
          <span>3D</span>
        </b>
        <h4>
          {preview.heading} <span>{preview.emphasis}</span>
        </h4>
        <p className="ex-print-upload">
          <i>
            <Upload size={14} />
          </i>
          <span>
            <strong>{preview.note}</strong>
            {preview.meta}
          </span>
        </p>
      </div>
      <div className="ex-print-shelf">
        {preview.items.map((item, index) => (
          <div key={item.label} className={`ex-print-fig ex-print-fig--${index}`}>
            <Photo src={PRINT_PHOTOS[index]} sizes={index === 0 ? "420px" : "220px"} />
            <p>
              {item.label}
              <b>{item.value}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- portfolio */
function PortfolioDemo({ preview }: DemoProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="ex ex--portfolio">
      <div className="ex-portfolio-text">
        <nav>
          <b>{preview.brand}</b>
          <span>{preview.nav.join(" · ")}</span>
        </nav>
        <h4>
          {preview.heading} <em>{preview.emphasis}</em>
        </h4>
        <p>{preview.meta}</p>
        <div className="ex-tags">
          {preview.items.map((item) => (
            <span key={item.label}>{item.label}</span>
          ))}
        </div>
      </div>
      <div className="ex-portfolio-grid">
        <button
          type="button"
          className="ex-portfolio-main"
          aria-pressed={liked}
          onClick={() => setLiked((value) => !value)}
        >
          <Photo src="portfolio-camera" sizes="300px" />
          <span>
            <Star size={11} fill={liked ? "currentColor" : "none"} />
          </span>
        </button>
        <div>
          <Photo src="portfolio-road" sizes="220px" />
        </div>
        <div className="ex-portfolio-mono">
          <Photo src="menu-dish" sizes="220px" />
        </div>
      </div>
    </div>
  );
}

export const DEMO_SITES: Record<ExampleKey, (props: DemoProps) => React.JSX.Element> = {
  blog: BlogDemo,
  menu: MenuDemo,
  booking: BookingDemo,
  shop: ShopDemo,
  dropshipping: DropshippingDemo,
  catalogue: CatalogueDemo,
  detailing: DetailingDemo,
  print3d: Print3dDemo,
  portfolio: PortfolioDemo,
};
