export default async function HeaderDatas(params) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HEADER_BASE_URL}${params}`,
    {
      cache: "no-store",
    }
  );

  return await response.json();
}
