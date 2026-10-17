import ycLogo from "@/assets/credentials/ycombinator.svg";
import a16zLogo from "@/assets/credentials/a16z.svg";

// Orange credentials band shared by the home and /startups pages.
// YC and a16z appear as their official marks (black, knocked out of the orange)
// instead of plain text.
export function CredentialsStrip() {
  return (
    <section className="credentials-strip" aria-label="Studio credentials">
      <p className="credentials-clients">
        <span>Fortune 300,</span>
        <img className="credentials-logo credentials-logo-yc" src={ycLogo} alt="Y Combinator" width={24} height={24} />
        <span>&amp;</span>
        <span className="credentials-backing">
          <img className="credentials-logo credentials-logo-a16z" src={a16zLogo} alt="Andreessen Horowitz (a16z)" width={76} height={24} />
          <span className="credentials-backing-label">-backed clients</span>
        </span>
      </p>
      <p><strong>200M+</strong> lifetime total impressions</p>
    </section>
  );
}
