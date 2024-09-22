const fetchCountryInfo = async (countryCode) => {
  return await fetch(`${process.env.COUNTRY_INFO_API}/${countryCode}`).then(
    (res) => res.json()
  );
  // const info = await fetch(
  //   `${process.env.COUNTRY_INFO_API}/${countryCode}`
  // ).then((res) => res.json());
  // const bordersflag = await Promise.all(
  //   info.borders.map(async (border) => {
  //     const { flag } = await fetchCountryFlag(border.countryCode);
  //     return {
  //       ...border,
  //       flag,
  //     };
  //   })
  // );

  // return { ...info, borders: bordersflag };
};
export const fetchCountryFlag = async (countryCode) => {
  return await fetch(`${process.env.COUNTRY_FLAG_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      iso2: countryCode,
    }),
  }).then(async (res) => {
    const { data } = await res.json();
    if (!data) {
      return { flag: process.env.DEFAULT_FLAG, iso3: null };
    }
    const { flag, iso3 } = data;
    return { flag, iso3 };
  });
};

const fetchCountryPopulation = async (iso3) => {
  if (!iso3) {
    return {
      year: 0,
      value: 0,
    };
  }
  return await fetch(`${process.env.COUNTRY_POPULATION_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      iso3,
    }),
  }).then(async (res) => {
    const { data } = await res.json();
    const { populationCounts } = data;
    return populationCounts;
  });
};

export const getCountryInfo = async (countryCode) => {
  const countryInfo = await fetchCountryInfo(countryCode);
  const countryFlag = await fetchCountryFlag(countryCode);
  const countryPopulation = await fetchCountryPopulation(countryFlag.iso3);

  return {
    name: countryInfo.commonName,
    officialName: countryInfo.officialName,
    countryCode: countryInfo.countryCode,
    iso2: countryInfo.countryCode,
    iso3: countryFlag.iso3,
    flag: countryFlag.flag,
    region: countryInfo.region,
    borders: countryInfo.borders,
    population: countryPopulation,
  };
};
