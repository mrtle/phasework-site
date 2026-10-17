import apple from "@/assets/clients/apple.svg.asset.json";
import netflix from "@/assets/clients/netflix-wordmark.svg.asset.json";
import adobe from "@/assets/clients/adobe.svg.asset.json";
import hubspot from "@/assets/clients/hubspot.svg.asset.json";
import dji from "@/assets/clients/dji.svg.asset.json";
import lovable from "@/assets/clients/lovable.svg.asset.json";

const clients = [
  { name: "Apple", asset: apple, symbol: true },
  { name: "Netflix", asset: netflix, symbol: false },
  { name: "Adobe", asset: adobe, symbol: true },
  { name: "HubSpot", asset: hubspot, symbol: false },
  { name: "DJI", asset: dji, symbol: true },
  { name: "Lovable", asset: lovable, symbol: true },
];

export function ClientProof() {
  return (
    <section className="client-proof" aria-label="Selected clients">
      <h2 className="client-proof-heading spec">Selected clients</h2>
      <ul className="client-logo-grid">
        {clients.map(({ name, asset, symbol }) => (
          <li className={`client-logo${symbol ? " client-logo-symbol" : ""}${name === "Lovable" ? " client-logo-lovable" : ""}`} key={name}>
            {name === "Lovable" && <span className="client-logo-name" aria-hidden="true">Lovable</span>}
            <img src={asset.url} alt={name} title={name} width={136} height={36} />
          </li>
        ))}
      </ul>
    </section>
  );
}