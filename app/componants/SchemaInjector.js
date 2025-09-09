
export default function SchemaInjector({ schemaJSON }) {
  if (!schemaJSON) return null;

  return (
    <head>
      <script
        key="rank-math-schema"
        type="application/ld+json"
        id="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: schemaJSON }}
      />
    </head>
  );
}
