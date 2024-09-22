import React from "react";
import Image from "next/image";
import Link from "next/link";

export const BorderCard = async ({ border }) => {
  const flag = await fetch(
    `${process.env.API_URL}/country/${border?.countryCode}/flag`
  ).then((res) => res.text());
  return (
    <Link
      href={`/country/${border?.countryCode}`}
      className="w-fullborder border-dashed flex flex-row gap-4  p-4 hover:border-solid hover:shadow-sm  rounded-lg transition-all duration-400"
    >
      <Image
        src={flag}
        alt={border?.commonName}
        height={100}
        width={100}
        className="rounded-lg object-contain shadow-md h-fit"
      />
      <div className="flex flex-col gap-1">
        <p>
          <b>Country:</b> {border?.commonName}
        </p>
        <h2>
          <b>Official Name:</b> {border?.officialName}
        </h2>
        <h2>
          <b>Region:</b> {border?.region}
        </h2>
      </div>
    </Link>
  );
};
