import type { CSSProperties } from "react";
import apple from "@/assets/clients/apple.svg";
import netflix from "@/assets/clients/netflix-wordmark.svg";
import sonyPictures from "@/assets/clients/sony-pictures.svg";
import wwe from "@/assets/clients/wwe.svg";
import adobe from "@/assets/clients/adobe.svg";
import pgaTour from "@/assets/clients/pga-tour.svg";
import hubspot from "@/assets/clients/hubspot.svg";
import sundance from "@/assets/clients/sundance.svg";
import twoK from "@/assets/clients/2k.svg";
import asus from "@/assets/clients/asus.svg";
import acura from "@/assets/clients/acura.svg";
import dji from "@/assets/clients/dji.svg";
import whiteClaw from "@/assets/clients/white-claw.svg";
import asana from "@/assets/clients/asana-wordmark.svg";
import lovable from "@/assets/clients/lovable.svg";

type Client = {
  name: string;
  asset: string;
  /** Logo height in conveyor units (1 unit = --client-unit). Tuned by eye so wordmarks and symbols carry similar visual weight. */
  size: number;
  /** Intrinsic width ÷ height of the SVG, so the img reserves the right width before it loads. */
  ratio: number;
  /** Show the company name above the mark (for marks people may not know on their own). */
  label?: boolean;
};

// Edit this list to change the conveyor. Order alternates wordmarks and symbols so the belt has rhythm.
const clients: Client[] = [
  { name: "Apple", asset: apple, size: 1.2, ratio: 0.81 },
  { name: "Netflix", asset: netflix, size: 0.85, ratio: 3.7 },
  { name: "Sony Pictures", asset: sonyPictures, size: 0.44, ratio: 12.92 },
  { name: "WWE", asset: wwe, size: 1.2, ratio: 1.09 },
  { name: "Adobe", asset: adobe, size: 1.1, ratio: 1.14 },
  { name: "PGA TOUR", asset: pgaTour, size: 1.5, ratio: 0.73 },
  { name: "HubSpot", asset: hubspot, size: 0.9, ratio: 3.42 },
  { name: "Sundance Film Festival", asset: sundance, size: 1, ratio: 3.16 },
  { name: "2K", asset: twoK, size: 1, ratio: 1 },
  { name: "ASUS", asset: asus, size: 0.6, ratio: 4.5 },
  { name: "Acura", asset: acura, size: 1.15, ratio: 0.98 },
  { name: "DJI", asset: dji, size: 1.05, ratio: 1.73 },
  { name: "White Claw", asset: whiteClaw, size: 1.6, ratio: 0.97 },
  { name: "Asana", asset: asana, size: 0.7, ratio: 5.05 },
  { name: "Lovable", asset: lovable, size: 0.85, ratio: 0.99, label: true },
];

function LogoList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="client-track" aria-hidden={hidden || undefined}>
      {clients.map(({ name, asset, size, ratio, label }) => (
        <li className={`client-logo${label ? " client-logo-labelled" : ""}`} key={name}>
          {label && <span className="client-logo-name" aria-hidden="true">{name}</span>}
          <img
            src={asset}
            alt={hidden ? "" : name}
            title={name}
            style={{ "--size": size, aspectRatio: String(ratio) } as CSSProperties}
            width={Math.round(ratio * 32)}
            height={32}
            loading="eager"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}

// "Worked with" conveyor: the list renders twice side by side and both copies slide left by
// their own width, so the belt loops without a seam. Pauses on hover; static and wrapped when
// the visitor prefers reduced motion.
export function ClientProof() {
  return (
    <section className="client-proof" aria-label="Selected clients">
      <h2 className="client-proof-heading spec">Worked with</h2>
      <div className="client-marquee">
        <LogoList />
        <LogoList hidden />
      </div>
    </section>
  );
}
