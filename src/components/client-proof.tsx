import apple from "@/assets/clients/apple.svg";
import netflix from "@/assets/clients/netflix-wordmark.svg";
import adobe from "@/assets/clients/adobe.svg";
import hubspot from "@/assets/clients/hubspot.svg";
import dji from "@/assets/clients/dji.svg";
import lovable from "@/assets/clients/lovable.svg";

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
            <img src={asset} alt={name} title={name} width={136} height={36} />
          </li>
        ))}
      </ul>
    </section>
  );
}