import { ListCountries } from "@/components/tables/ListCountries";
import { getCountries } from "@/utils/res/countriesRequest";
export default async function Country() {
  const countries = await getCountries();

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Avaliable Countries
        </h1>
      </div>
      <div className="flex">
        <ListCountries countries={countries} />
      </div>
    </>
  );
}
