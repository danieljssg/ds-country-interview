export const getCountries = async () => {
  return await new Promise(async (resolve, reject) => {
    const res = await fetch(`${process.env.API_URL}/country`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      reject(await res.json());
    }

    const countries = await res.json();

    resolve(countries);
  });
};

export const getCountry = async (slug) => {
  return await new Promise(async (resolve, reject) => {
    const res = await fetch(`${process.env.API_URL}/country/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      reject(await res.json());
    }

    const countries = await res.json();

    resolve(countries);
  });
};
