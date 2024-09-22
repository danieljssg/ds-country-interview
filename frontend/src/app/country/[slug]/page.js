import moment from "moment";
import { Button } from "@/components/ui/button";
import { getCountry } from "@/utils/res/countriesRequest";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BorderCard } from "@/components/cards/BorderCard";
import { PopulationChart } from "@/components/charts/PopulationChart";

export default async function SpecificCountry({ params }) {
  const { slug } = params;
  const country = await getCountry(slug);
  if (!country.success) {
    return notFound();
  }
  const { results } = country;
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg  md:text-2xl">
            <b>Country:</b> {results?.name}
          </h1>
          <h2>
            <b>Official Name:</b> {results?.officialName}
          </h2>
          <h2>
            <b>Region:</b> {results?.region}
          </h2>
          <p>
            <b>Country Code:</b> [ {results?.countryCode} or {results?.iso3} ]
          </p>
        </div>
        <Image
          src={results?.flag}
          alt={results?.name}
          height={100}
          width={100}
          className="rounded-lg object-contain shadow-md h-fit"
        />
      </div>
      <hr />
      <h1 className="text-lg  md:text-2xl font-semibold">Borders:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {results?.borders?.map((border) => (
          <div key={border.countryCode} className="flex flex-row gap-4 text-sm">
            <BorderCard border={border} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center w-full">
        <PopulationChart population={results?.population} />
      </div>
      <h1 className="text-sm text-gray-500 text-center">
        Last Update: {moment(country?.timestamp).fromNow()}
      </h1>
    </>
  );
}
