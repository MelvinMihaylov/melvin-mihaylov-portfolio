"use client";

import type { LandingContent } from "@/content";
import * as Tabs from "@radix-ui/react-tabs";
import {
  BarChart3,
  Check,
  CreditCard,
  Database,
  FileSpreadsheet,
  ShoppingBag,
  Truck,
  Users,
  Workflow,
} from "lucide-react";
import { useId, useState } from "react";

const STAGE_ICONS = [ShoppingBag, CreditCard, Truck, FileSpreadsheet];

/** Illustrative revenue series backing the analytics chart. */
const SERIES = [26, 31, 29, 38, 42, 48];

type SystemDemoProps = {
  content: LandingContent;
};

export function SystemDemo({ content }: SystemDemoProps) {
  const { demo } = content.integrations;
  const [activePoint, setActivePoint] = useState(SERIES.length - 1);
  const fillId = useId();

  const max = Math.max(...SERIES);
  const min = Math.min(...SERIES);
  const points = SERIES.map((value, index) => ({
    x: 45 + index * 90,
    y: 180 - ((value - min) / (max - min || 1)) * 140,
  }));
  const line = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y.toFixed(1)}`)
    .join(" ");

  return (
    <div className="surface-card reveal">
      <div className="demo-toolbar">
        <span className="demo-app">
          <Database size={17} />
          {demo.appName}
        </span>
        <span className="demo-label">{demo.label}</span>
      </div>

      <Tabs.Root defaultValue="integrations" className="system-tabs">
        <Tabs.List className="system-tab-list">
          <Tabs.Trigger value="integrations">
            <Workflow size={15} />
            {demo.tabs.integrations}
          </Tabs.Trigger>
          <Tabs.Trigger value="crm">
            <Users size={15} />
            {demo.tabs.crm}
          </Tabs.Trigger>
          <Tabs.Trigger value="analytics">
            <BarChart3 size={15} />
            {demo.tabs.analytics}
          </Tabs.Trigger>
        </Tabs.List>

        {/* Order → payment → shipping → invoice */}
        <Tabs.Content value="integrations" className="demo-content">
          <div className="demo-heading">
            <div>
              <p className="panel-kicker">{demo.integrations.kicker}</p>
              <h3>{demo.integrations.title}</h3>
            </div>
            <span className="demo-count">{demo.integrations.count}</span>
          </div>

          <div className="flow-stack">
            {demo.integrations.stages.map((stage, index) => {
              const Icon = STAGE_ICONS[index] ?? Workflow;
              return (
                <div
                  key={stage.title}
                  className="flow-stage"
                  style={{ "--stage": index } as React.CSSProperties}
                >
                  <span className="flow-icon">
                    <Icon size={17} />
                  </span>
                  <div>
                    <strong>{stage.title}</strong>
                    <span>{stage.source}</span>
                  </div>
                  <Check className="flow-check" size={17} />
                </div>
              );
            })}
          </div>

          <p className="demo-caption">
            <strong>{demo.integrations.orderLabel}</strong> · {demo.integrations.orderValue} ·{" "}
            {demo.integrations.orderNote}
            <br />
            {demo.integrations.caption}
          </p>
        </Tabs.Content>

        {/* Pipeline table */}
        <Tabs.Content value="crm" className="demo-content">
          <div className="demo-heading">
            <div>
              <p className="panel-kicker">{demo.crm.kicker}</p>
              <h3>{demo.crm.title}</h3>
            </div>
            <span className="demo-count">{demo.crm.count}</span>
          </div>

          <div className="crm-table">
            <div className="crm-row is-head" aria-hidden="true">
              {demo.crm.columns.map((column) => (
                <span key={column}>{column}</span>
              ))}
            </div>
            {demo.crm.rows.map((row) => (
              <div key={row.company} className="crm-row">
                <strong>{row.company}</strong>
                <span>{row.stage}</span>
                <span>{row.value}</span>
                <span className={`crm-pill is-${row.status}`}>
                  {demo.crm.statusLabels[row.status]}
                </span>
              </div>
            ))}
          </div>

          <p className="demo-caption">{demo.crm.caption}</p>
        </Tabs.Content>

        {/* Revenue chart */}
        <Tabs.Content value="analytics" className="demo-content">
          <div className="demo-heading">
            <div>
              <p className="panel-kicker">{demo.analytics.kicker}</p>
              <h3>{demo.analytics.title}</h3>
            </div>
            <span className="demo-count">{demo.analytics.count}</span>
          </div>

          <div className="stat-row">
            {demo.analytics.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <em>{stat.delta}</em>
              </div>
            ))}
          </div>

          <div className="chart-wrap">
            <svg viewBox="0 0 540 220" role="img" aria-label={demo.analytics.title}>
              <defs>
                {/* userSpaceOnUse so the fade maps to the plot area, not the path bbox. */}
                <linearGradient
                  id={fillId}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="30"
                  x2="0"
                  y2="180"
                >
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[35, 83, 132, 180].map((y) => (
                <line key={y} x1="20" y1={y} x2="520" y2={y} className="chart-grid-line" />
              ))}

              <path d={`${line} L495,180 L45,180 Z`} fill={`url(#${fillId})`} />
              <path d={line} className="chart-line" />

              {points.map((point, index) => (
                <g key={demo.analytics.months[index]}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={activePoint === index ? 6 : 4}
                    className="chart-dot"
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="20"
                    fill="transparent"
                    tabIndex={0}
                    role="button"
                    aria-label={`${demo.analytics.months[index]}: €${SERIES[index]},000`}
                    onMouseEnter={() => setActivePoint(index)}
                    onFocus={() => setActivePoint(index)}
                  />
                  <text x={point.x} y="209" textAnchor="middle">
                    {demo.analytics.months[index]}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <p className="demo-caption">{demo.analytics.caption}</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
