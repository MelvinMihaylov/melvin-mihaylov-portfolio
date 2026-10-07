"use client";

import type { ExampleKey, ExamplePreview } from "@/content";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Check,
  Clock,
  Heart,
  Plus,
  QrCode,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import { useState } from "react";
import { CityArt, DishArt, ProductArt, ProfileArt, ThumbArt } from "./DemoArt";

type DemoProps = { preview: ExamplePreview };

/**
 * The mocks are interactive: things that look clickable are clickable, and the
 * state they change is real. Each demo remounts when the showcase switches, so
 * state resets on its own.
 */

/** Shared chrome: the mock's own navigation bar. */
function DemoNav({ preview, action }: DemoProps & { action?: React.ReactNode }) {
  return (
    <header className="ds-nav">
      <b>{preview.brand}</b>
      <nav>
        {preview.nav.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
      {action}
    </header>
  );
}

/* ---------------------------------------------------------------- blog */
function BlogDemo({ preview }: DemoProps) {
  // Which item is in the hero slot; clicking a row promotes it.
  const [featured, setFeatured] = useState(0);
  const [saved, setSaved] = useState(false);
  const lead = preview.items[featured];
  const rest = preview.items.filter((_, i) => i !== featured);

  return (
    <div className="ds ds--blog">
      <DemoNav
        preview={preview}
        action={
          <button
            type="button"
            className={`ds-pill ds-act${saved ? " is-on" : ""}`}
            onClick={() => setSaved((v) => !v)}
            aria-pressed={saved}
            aria-label="Save"
          >
            <Bookmark size={10} fill={saved ? "currentColor" : "none"} />
          </button>
        }
      />
      <article className="ds-hero" key={featured}>
        <span className="ds-art ds-art--city">
          <CityArt />
        </span>
        <div className="ds-hero-copy">
          <span className="ds-tag">{lead.detail}</span>
          <h4>{featured === 0 ? preview.heading : lead.label}</h4>
          <p className="ds-byline">
            <span className="ds-face ds-face--1" />
            {preview.meta}
          </p>
        </div>
        <span className="ds-hero-badge">
          <ArrowUpRight size={13} />
        </span>
      </article>
      <ul className="ds-articles">
        {rest.slice(0, 3).map((item) => (
          <li key={item.label}>
            <button type="button" onClick={() => setFeatured(preview.items.indexOf(item))}>
              <span className={`ds-art ds-art--thumb${preview.items.indexOf(item) % 3}`}>
                <ThumbArt kind={preview.items.indexOf(item) % 3} />
              </span>
              <div>
                <em>{item.detail}</em>
                <strong>{item.label}</strong>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------------------- menu */
function MenuDemo({ preview }: DemoProps) {
  const [featured, setFeatured] = useState(0);
  const dishes = preview.items.slice(0, 5);
  const lead = dishes[featured];
  const rest = dishes.filter((_, i) => i !== featured);

  return (
    <div className="ds ds--menu">
      <DemoNav preview={preview} action={<i className="ds-pill ds-pill--gold">{preview.meta}</i>} />
      <div className="ds-menu-body">
        <div className="ds-menu-feature" key={featured}>
          <span className="ds-art ds-art--dish">
            <DishArt />
          </span>
          <div className="ds-menu-feature-copy">
            <span className="ds-stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={8} fill="currentColor" />
              ))}
            </span>
            <strong>{lead?.label}</strong>
            <b>{lead?.value}</b>
          </div>
        </div>
        <div className="ds-menu-list">
          <h4>{preview.heading}</h4>
          <ul className="ds-dishes">
            {rest.map((item) => (
              <li key={item.label}>
                <button type="button" onClick={() => setFeatured(dishes.indexOf(item))}>
                  <div>
                    <strong>{item.label}</strong>
                    <em>{item.detail}</em>
                  </div>
                  <span className="ds-leader" />
                  <b>{item.value}</b>
                </button>
              </li>
            ))}
          </ul>
          <div className="ds-qr">
            <QrCode size={22} />
            <span>{preview.cta}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- booking */
const DAYS = Array.from({ length: 28 }, (_, i) => i + 1);
const SLOTS = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:30"];
const TAKEN = "18:30";

function BookingDemo({ preview }: DemoProps) {
  const [service, setService] = useState(1);
  const [day, setDay] = useState(18);
  const [slot, setSlot] = useState("11:30");
  const [booked, setBooked] = useState(false);

  return (
    <div className="ds ds--booking">
      <span className="ds-mesh" />
      <DemoNav
        preview={preview}
        action={
          <i className="ds-pill ds-pill--solid">
            <Star size={9} fill="currentColor" /> 4.9
          </i>
        }
      />
      <div className="ds-booking">
        <div className="ds-booking-side">
          <h4>{preview.heading}</h4>
          <ul className="ds-services">
            {preview.items.map((item, index) => (
              <li key={item.label}>
                <button
                  type="button"
                  className={index === service ? "is-picked" : undefined}
                  aria-pressed={index === service}
                  onClick={() => setService(index)}
                >
                  <span className={`ds-face ds-face--${index + 1}`} />
                  <div>
                    <strong>{item.label}</strong>
                    <em>
                      <Clock size={8} /> {item.detail}
                    </em>
                  </div>
                  <b>{item.value}</b>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="ds-calendar">
          <div className="ds-cal-head">
            <strong>{preview.meta}</strong>
            <span className="ds-dots">
              <i />
              <i />
            </span>
          </div>
          <div className="ds-cal-grid">
            {DAYS.map((d) => {
              const off = d % 7 === 0;
              return (
                <button
                  type="button"
                  key={d}
                  disabled={off}
                  aria-pressed={d === day}
                  className={d === day ? "is-active" : off ? "is-off" : undefined}
                  onClick={() => setDay(d)}
                >
                  {d}
                </button>
              );
            })}
          </div>
          <div className="ds-slot-rows">
            {[SLOTS.slice(0, 3), SLOTS.slice(3)].map((row) => (
              <div className="ds-slots" key={row[0]}>
                {row.map((time) => (
                  <button
                    type="button"
                    key={time}
                    disabled={time === TAKEN}
                    aria-pressed={time === slot}
                    className={time === slot ? "is-active" : time === TAKEN ? "is-gone" : undefined}
                    onClick={() => setSlot(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <button
            type="button"
            className={`ds-cta${booked ? " is-done" : ""}`}
            onClick={() => setBooked(true)}
          >
            {booked ? (
              <>
                <Check size={13} /> {day} · {slot}
              </>
            ) : (
              <>
                {preview.cta} <ArrowRight size={12} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- shop */
const SHOP_BADGES = ["-20%", "", "", ""];

function ShopDemo({ preview }: DemoProps) {
  const [cart, setCart] = useState(2);
  const [liked, setLiked] = useState<number[]>([]);
  const [added, setAdded] = useState<number | null>(null);

  const toggleLike = (index: number) =>
    setLiked((v) => (v.includes(index) ? v.filter((i) => i !== index) : [...v, index]));

  const addToCart = (index: number) => {
    setCart((c) => c + 1);
    setAdded(index);
    window.setTimeout(() => setAdded((a) => (a === index ? null : a)), 1100);
  };

  return (
    <div className="ds ds--shop">
      <DemoNav
        preview={preview}
        action={
          <i className="ds-cart" key={cart}>
            <ShoppingBag size={11} />
            <u>{cart}</u>
          </i>
        }
      />
      <div className="ds-shop-head">
        <div>
          <h4>{preview.heading}</h4>
          <span className="ds-meta">{preview.meta}</span>
        </div>
        <i className="ds-filter">
          <SlidersHorizontal size={10} />
        </i>
      </div>
      <div className="ds-products">
        {preview.items.slice(0, 4).map((item, index) => (
          <article key={item.label}>
            <button type="button" className="ds-prod-hit" onClick={() => addToCart(index)}>
              <span className={`ds-art ds-art--prod${index}`}>
                <ProductArt kind={index as 0 | 1 | 2 | 3} />
                {SHOP_BADGES[index] && <u className="ds-badge">{SHOP_BADGES[index]}</u>}
                {added === index && (
                  <b className="ds-added">
                    <Check size={11} />
                  </b>
                )}
              </span>
            </button>
            <button
              type="button"
              className={`ds-like${liked.includes(index) ? " is-on" : ""}`}
              aria-pressed={liked.includes(index)}
              aria-label="Like"
              onClick={() => toggleLike(index)}
            >
              <Heart size={9} fill={liked.includes(index) ? "currentColor" : "none"} />
            </button>
            <strong>{item.label}</strong>
            <div className="ds-price-row">
              <b>{item.value}</b>
              <span className="ds-rate">
                <Star size={8} fill="currentColor" /> 4.{8 - index}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- catalogue */
const STOCK = ["is-in", "is-in", "is-low", "is-in", "is-in", "is-low"];
const FACETS = ["S235", "S355", "P235", "AISI 304"];

function CatalogueDemo({ preview }: DemoProps) {
  const [picked, setPicked] = useState<number[]>([1]);
  const rows = preview.items.slice(0, 6);
  // Filtering is keyed off the facet index so the list visibly reacts.
  const visible =
    picked.length === 0
      ? rows
      : rows.filter((_, i) => picked.includes(i % 4) || picked.includes((i + 1) % 4));

  return (
    <div className="ds ds--catalogue">
      <DemoNav
        preview={preview}
        action={
          <i className="ds-pill ds-pill--blue">
            {visible.length} / {rows.length}
          </i>
        }
      />
      <div className="ds-cat-body">
        <aside className="ds-facets">
          <p>{preview.heading}</p>
          {FACETS.map((facet, index) => (
            <button
              type="button"
              key={facet}
              className="ds-facet"
              aria-pressed={picked.includes(index)}
              onClick={() =>
                setPicked((v) => (v.includes(index) ? v.filter((i) => i !== index) : [...v, index]))
              }
            >
              <i className={picked.includes(index) ? "is-on" : undefined}>
                {picked.includes(index) && <Check size={8} />}
              </i>
              {facet}
              <u>{48 - index * 11}</u>
            </button>
          ))}
        </aside>
        <div className="ds-cat-main">
          <div className="ds-search">
            <Search size={11} />
            <span>{preview.brand}</span>
          </div>
          <ul className="ds-rows">
            {visible.map((item) => {
              const index = rows.indexOf(item);
              return (
                <li key={item.label} className="ds-row-in">
                  <span className="ds-art ds-art--part">
                    <ProfileArt kind={index} />
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    <em>{item.detail}</em>
                  </div>
                  <span className={`ds-stock ${STOCK[index]}`} />
                  <i>{preview.cta}</i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- portfolio */
function PortfolioDemo({ preview }: DemoProps) {
  const [featured, setFeatured] = useState(0);
  const hero = preview.items[featured];
  const rest = preview.items.filter((_, i) => i !== featured);

  return (
    <div className="ds ds--portfolio">
      <article className="ds-folio-hero">
        <span className="ds-art ds-art--arch" key={featured} />
        <header className="ds-folio-nav">
          <b>{preview.brand}</b>
          <nav>
            {preview.nav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </nav>
        </header>
        <div className="ds-folio-copy" key={`c${featured}`}>
          <span className="ds-folio-kicker">{preview.heading}</span>
          <h4>{hero.label}</h4>
          <p>{hero.detail}</p>
        </div>
        <span className="ds-folio-index">{String(featured + 1).padStart(2, "0")}</span>
      </article>
      <div className="ds-folio-strip">
        {rest.slice(0, 2).map((item, index) => (
          <button
            type="button"
            key={item.label}
            onClick={() => setFeatured(preview.items.indexOf(item))}
          >
            <span className={`ds-art ds-art--folio${index}`}>
              <ThumbArt kind={index + 1} />
            </span>
            <div>
              <strong>{item.label}</strong>
              <em>{item.detail}</em>
            </div>
          </button>
        ))}
        <article className="ds-folio-more">
          <span>{preview.meta}</span>
          <i>
            <Plus size={14} />
          </i>
        </article>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- dashboard */
const SERIES = [
  "M0,74 L14,58 L28,64 L42,40 L56,46 L70,24 L84,30 L100,10",
  "M0,66 L14,70 L28,48 L42,54 L56,32 L70,38 L84,20 L100,22",
  "M0,80 L14,62 L28,68 L42,50 L56,56 L70,34 L84,42 L100,18",
];
const SPARKS = ["M0,12 L8,7 L16,10 L24,3", "M0,4 L8,9 L16,5 L24,11", "M0,10 L8,8 L16,4 L24,2"];

function DashboardDemo({ preview }: DemoProps) {
  const [metric, setMetric] = useState(0);

  return (
    <div className="ds ds--dashboard">
      <DemoNav
        preview={preview}
        action={
          <i className="ds-live">
            <s />
            {preview.meta}
          </i>
        }
      />
      <div className="ds-dash-head">
        <h4>{preview.heading}</h4>
      </div>
      <div className="ds-kpis">
        {preview.items.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className={index === metric ? "is-active" : undefined}
            aria-pressed={index === metric}
            onClick={() => setMetric(index)}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <div className="ds-kpi-foot">
              <em>{item.detail}</em>
              <svg className="ds-spark" viewBox="0 0 24 14" aria-hidden="true">
                <path d={SPARKS[index]} />
              </svg>
            </div>
          </button>
        ))}
      </div>
      <div className="ds-graph">
        <div className="ds-graph-inner" key={metric}>
          <svg viewBox="0 0 100 84" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="dsAreaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.42" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${SERIES[metric]} L100,84 L0,84 Z`} fill="url(#dsAreaFill)" stroke="none" />
            <path d={SERIES[metric]} className="ds-area-line" />
          </svg>
          <span className="ds-graph-dot" style={{ top: `${(10 / 84) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- crm */
const PROGRESS = [35, 70, 100];

function CrmDemo({ preview }: DemoProps) {
  const [selected, setSelected] = useState(2);

  return (
    <div className="ds ds--crm">
      <DemoNav
        preview={preview}
        action={
          <i className="ds-faces">
            <span className="ds-face ds-face--1" />
            <span className="ds-face ds-face--2" />
            <span className="ds-face ds-face--3" />
            <u>+4</u>
          </i>
        }
      />
      <div className="ds-crm-head">
        <h4>{preview.heading}</h4>
        <span className="ds-meta">{preview.meta}</span>
      </div>
      <div className="ds-board">
        {preview.items.map((item, index) => (
          <div key={item.label} className="ds-col">
            <p>
              <s className={`ds-dot ds-dot--${index}`} />
              {item.label}
              <u>{index + 2}</u>
            </p>
            <button
              type="button"
              className={index === selected ? "is-won" : undefined}
              aria-pressed={index === selected}
              onClick={() => setSelected(index)}
            >
              <span className={`ds-face ds-face--${index + 1}`} />
              <strong>{item.detail}</strong>
              <b>{item.value}</b>
              <span className="ds-progress">
                <i style={{ width: `${PROGRESS[index]}%` }} />
              </span>
            </button>
            <article className="is-ghost">
              <span className="ds-line" />
              <span className="ds-line is-short" />
            </article>
            <article className="is-ghost">
              <span className="ds-line is-short" />
              <span className="ds-line" />
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export const DEMO_SITES: Record<ExampleKey, (props: DemoProps) => React.JSX.Element> = {
  blog: BlogDemo,
  menu: MenuDemo,
  booking: BookingDemo,
  shop: ShopDemo,
  catalogue: CatalogueDemo,
  portfolio: PortfolioDemo,
  dashboard: DashboardDemo,
  crm: CrmDemo,
};
