import React, { useState } from "react";
import type { Property } from "../../types/PropertyType";
import type { Unit } from "../../types/UnitTypes";
import supabase from "../../api/supabaseClient";
import LabeledInput from "../ui/LabledInput";

interface PropertyEditFormProps {
  property: Property;
  units: Unit[];
  onCancel: () => void;
  onSaved: () => void;
}

const PropertyEditForm: React.FC<PropertyEditFormProps> = ({
  property,
  units,
  onCancel,
  onSaved,
}) => {
  const [formData, setFormData] = useState<Property>(property);
  const [unitData, setUnitData] = useState<Unit[]>(units);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUnitChange = (
    index: number,
    field: keyof Unit,
    value: string | number | boolean
  ) => {
    setUnitData((prev) =>
      prev.map((u, i) => (i === index ? { ...u, [field]: value } : u))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Update property
    const { error: propertyError } = await supabase
      .from("properties")
      .update(formData)
      .eq("property_id", property.property_id);

    if (propertyError) {
      console.error("Error updating property:", propertyError);
      return;
    }

    // Update units
    for (const unit of unitData) {
      const { error: unitError } = await supabase
        .from("units")
        .update(unit)
        .eq("unit_id", unit.unit_id);

      if (unitError) {
        console.error("Error updating unit:", unitError);
      }
    }

    onSaved();
  };

  return (
    <form id="property-edit-form" onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium">Street Address</label>
        <input
          type="text"
          name="street_address"
          value={formData.street_address}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <span className="font-light">ex. "123 Main Street"</span>
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description ?? ""}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Units</h4>
        {unitData.map((unit, i) => (
          <div key={unit.unit_id} className="border rounded p-3 mb-2 space-y-2">
            <LabeledInput
              label="Unit #"
              value={unit.unit_number ?? ""}
              onChange={(val) => handleUnitChange(i, "unit_number", val)}
            />

            <LabeledInput
              label="Beds"
              type="number"
              value={unit.beds ?? 0}
              onChange={(val) => handleUnitChange(i, "beds", val)}
            />

            <LabeledInput
              label="Baths"
              type="number"
              value={unit.baths ?? 0}
              onChange={(val) => handleUnitChange(i, "baths", val)}
            />

            <LabeledInput
              label="Rent"
              type="number"
              value={unit.rent ?? 0}
              onChange={(val) => handleUnitChange(i, "rent", val)}
            />
            <LabeledInput
              label="Sqft"
              type="number"
              value={unit.sqft ?? 0}
              onChange={(val) => handleUnitChange(i, "rent", val)}
            />
            <LabeledInput
              label="Occupied"
              type="checkbox"
              value={unit.occupied ?? false}
              onChange={(val) => handleUnitChange(i, "occupied", val)}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export default PropertyEditForm;
