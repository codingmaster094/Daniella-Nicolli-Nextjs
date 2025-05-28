// app/urls/page.js

const siteUrl = "https://daniella-nicolli-nextjs.vercel.app";

const SiteMapData = [
  "fett-weg-spritze-mannheim",
  "fett-weg-spritze-ludwigshafen",
  "fett-weg-spritze-heidelberg",
  "fett-weg-spritze-frankenthal",
  "microneedling-mannheim",
  "microneedling-ludwigshafen",
  "microneedling-gruenstadt",
  "microneedling-frankenthal",
  "heilpraktikerin-worms",
  "heilpraktikerin-ludwigshafen",
  "heilpraktikerin-freinsheim",
  "heilpraktikerin-bad-duerkheim",
  "heilpraktiker-maxdorf",
  "heilpraktiker-mannheim",
  "heilpraktiker-gruenstadt",
  "heilpraktiker-frankenthal",
  "faltenunterspritzung-hyaluronsaeure",
  "faltenunterspritzung-mannheim",
  "faltenunterspritzung-ludwigshafen",
  "faltenunterspritzung-lambsheim",
  "faltenunterspritzung-gruenstadt",
  "faltenbehandlung-mannheim",
  "faltenbehandlung-heidelberg",
  "fadenlifting-mannheim",
  "faltenbehandlung-frankenthal",
  "fadenlifting-ludwigshafen",
  "landing-page",
  "datenschutzerklarung",
  "impressum",
  "blog",
  "ratgerber",
  "ueber-mich",
  "naturheilmedizin",
  "kontakt",
  "aesthetik",
  "home",
];

export default function UrlTable() {
  const uniquePaths = [...new Set(SiteMapData)];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">All URLs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-700">
                URL
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {uniquePaths.map((slug, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 text-sm text-blue-600">
                  <a
                    href={`${siteUrl}/${slug}`}
                    className="hover:underline"
                    target="_blank"
                  >
                    {`${siteUrl}/${slug}`}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
