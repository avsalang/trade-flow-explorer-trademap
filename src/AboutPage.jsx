import GuidanceShell from "./GuidanceShell.jsx";

const LINKS = {
  trademap: "https://www.trademap.org/",
  trademapFaq: "https://www.trademap.org/stFAQ.aspx",
  comtrade: "https://comtradeplus.un.org/",
  comtradePolicy: "https://uncomtrade.org/docs/policy-on-use-and-re-dissemination/",
  hhi: "https://www.justice.gov/atr/herfindahl-hirschman-index",
  unctad: "https://unctad.org/system/files/official-document/ditcmisc2023d1_en_0.pdf",
};

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <GuidanceShell footer="Sources: ITC Trade Map and United Nations Comtrade annual merchandise trade data.">
      <div className="page about-page">
        <header className="about-heading">
          <span>About</span>
          <h1>ATO Trade Intelligence</h1>
          <p>
            Explore trade in selected transport products and goods across the
            electric-vehicle value chain.
          </p>
        </header>

        <article className="about-panel">
          <section>
            <h3>Overview</h3>
            <p>
              ATO Trade Intelligence brings together two complementary views of
              international merchandise trade. The Trade Flow Explorer examines trade
              reported by Asia-Pacific economies with partners worldwide. The EV Value
              Chain presents global trade across five stages, from extraction through
              electric vehicles and their destination markets.
            </p>
            <p>
              The tool can be used to identify major trading economies, compare
              bilateral relationships, review changes over time and examine how
              concentrated trade is among suppliers or destinations.
            </p>
          </section>

          <section>
            <h3>Scope and Limitations</h3>
            <p>
              The Trade Flow Explorer covers 60 detailed Harmonized System product
              codes and 52 Asia-Pacific reporting economies. Annual data are available
              from 2001 to 2025 where reported. Coverage differs by product, economy
              and year, and 2025 remains incomplete.
            </p>
            <p>
              Trade Flow Explorer values are drawn from ITC Trade Map and presented in
              current US dollars. A direct observation comes from the selected reporting
              economy. A mirror estimate is reconstructed from partner reports when a
              direct observation is unavailable. Imports and exports remain separate
              views and may differ because of valuation, timing, partner attribution,
              transshipment and reporting practices. Missing observations are not zero.
            </p>
            <p>
              Headline totals, rankings, concentration measures and trends use the full
              validated data available for the selected products and years. The map and
              table show up to the 100 largest bilateral routes. The bilateral-trade
              Sankey retains the full reported value by combining smaller relationships
              under “Other economies.”
            </p>
            <p>
              Supplier or destination concentration is measured with the
              Herfindahl–Hirschman Index (HHI). Higher values indicate that trade is
              concentrated among fewer partners. HHI should be considered alongside
              the underlying trade relationships and is not a complete measure of
              supply-chain risk.
            </p>
            <p>
              Product coverage follows the detailed HS6 codes listed in the selector.
              Some codes cover goods with different technologies or uses, while some
              specialised products cannot be isolated precisely within the Harmonized
              System.
            </p>
          </section>

          <section>
            <h3>Disclaimer</h3>
            <p>
              This tool is intended for research, analysis and knowledge sharing. It is
              not an official publication of ITC or the United Nations and does not
              replace the source databases, national trade statistics or applicable
              metadata. Users should consult the original sources for official figures
              and definitions.
            </p>
          </section>

          <section>
            <h3>Acknowledgements</h3>
            <p>
              The tool was developed by the Asian Transport Observatory. The EV
              value-chain presentation adapts the method described in UNCTAD’s
              <ExternalLink href={LINKS.unctad}> <em>Technical note on critical minerals</em></ExternalLink>.
            </p>
          </section>

          <section>
            <h3>Sources</h3>
            <p>
              The Trade Flow Explorer uses annual data from <ExternalLink href={LINKS.trademap}>ITC Trade Map</ExternalLink>.
              Its <ExternalLink href={LINKS.trademapFaq}>frequently asked questions</ExternalLink> explain direct and mirror data and the underlying sources.
              The EV Value Chain uses the <ExternalLink href={LINKS.comtrade}>UN Comtrade database</ExternalLink> and is subject to the <ExternalLink href={LINKS.comtradePolicy}>UN Comtrade policy on use and re-dissemination</ExternalLink>.
              The concentration bands refer to the <ExternalLink href={LINKS.hhi}>U.S. Department of Justice explanation of HHI</ExternalLink>.
            </p>
          </section>
        </article>
      </div>
    </GuidanceShell>
  );
}
