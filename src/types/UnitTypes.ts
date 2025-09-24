export interface Unit {
  unit_id: number;
  property_id: number;
  unit_number: string;
  beds: number;
  baths: number;
  sqft: number;
  rent: number;
  photo: string;
  occupied:boolean;
  amenities: string;
  lease_start_date: string;
  lease_end_date: string;
  photos: string[];
}