import ycLogo from "@/assets/credentials/ycombinator.svg";
import a16zLogo from "@/assets/credentials/a16z.svg";

// Orange credentials band shared by the home and /startups pages.
// Two cells with the same anatomy (big headline on top, label line at the bottom):
//   FORTUNE 300 / Clients + startups backed by [YC mark] Y Combinator | [Andreessen Horowitz]
//   200M+       / Lifetime total impressions
// Logos sit after the sentence, never inside it, and are shown black on the orange.
export function CredentialsStrip() {
  return (
    <section className="credentials-strip" aria-label="Studio credentials">
      <div className="credentials-stat">
        <strong>Fortune 300</strong>
        <div className="credentials-foot">
          <span className="credentials-label">Clients + startups backed by</span>
          <span className="credentials-backers">
            <span className="credentials-yc">
              <img src={ycLogo} alt="" width={24} height={24} />
              Y Combinator
            </span>
            <img className="credentials-a16z" src={a16zLogo} alt="Andreessen Horowitz (a16z)" width={76} height={24} />
          </span>
        </div>
      </div>
      <div className="credentials-stat">
        <strong>200M+</strong>
        <span className="credentials-label">Lifetime total impressions</span>
      </div>
    </section>
  );
}
