import React, { useState, useEffect } from 'react';
import Select, { SingleValue } from 'react-select';
import { fetchData } from '@/services/vehiculo'; // Ajusta la ruta según sea necesario

const Checkbox: React.FC<JSX.IntrinsicElements['input']> = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

interface OptionType {
  value: string;
  label: string;
}

interface VehicleSelectProps {
  selectedOption: SingleValue<OptionType>;
  setSelectedOption: React.Dispatch<React.SetStateAction<SingleValue<OptionType>>>;
}

const VehicleSelect: React.FC<VehicleSelectProps> = ({ selectedOption, setSelectedOption }) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [isRtl, setIsRtl] = useState(false);
  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const vehicles = await fetchData();
        const formattedOptions = vehicles.map((vehicle: { id: string; model: string; brand: string }) => ({
          value: vehicle.id, // Suponiendo que cada vehículo tiene un campo `id`
          label: `${vehicle.model} ${vehicle.brand}` // Ajusta según el campo que quieras mostrar como etiqueta
        }));
        setOptions(formattedOptions);
        setIsLoading(false); // Data has been loaded
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Handle error and set loading to false
      }
    };

    getVehicles();
  }, []);

  return (
    <>
      <Select
        className="basic-single w-full"
        classNamePrefix="select"
        value={selectedOption}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="vehicle"
        options={options}
        onChange={setSelectedOption}
      />

      <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >
        <Checkbox
          checked={isClearable}
          onChange={() => setIsClearable((state) => !state)}
        >
          Clearable
        </Checkbox>
        <Checkbox
          checked={isSearchable}
          onChange={() => setIsSearchable((state) => !state)}
        >
          Searchable
        </Checkbox>
        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled((state) => !state)}
        >
          Disabled
        </Checkbox>
        <Checkbox
          checked={isLoading}
          onChange={() => setIsLoading((state) => !state)}
        >
          Loading
        </Checkbox>
        <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
          RTL
        </Checkbox>
      </div>
    </>
  );
};

export default VehicleSelect;
