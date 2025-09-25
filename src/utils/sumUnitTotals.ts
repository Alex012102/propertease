import type { Unit } from "../types/UnitTypes";

export interface PropertyTotals {
  Beds: number;
  Baths: number;
  Sqft: number;
}

/**
 * Sum up unit details into totals (beds, baths, sqft, unit count).
 */
export const sumUnitTotals = (units: Unit[]): PropertyTotals => {
  let beds = 0;
  let baths = 0;
  let sqft = 0;

  units.forEach((u) => {
    beds += u.beds;
    baths += u.baths;
    sqft += u.sqft;
  });

  return {
    Beds: beds,
    Baths: baths,
    Sqft: sqft,
  };
};
