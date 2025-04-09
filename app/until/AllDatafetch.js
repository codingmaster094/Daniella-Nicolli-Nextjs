export default async function Alldata(params) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${params}`,
        {
          cache: "no-store",
        }
      );

      return await response.json();
    
}