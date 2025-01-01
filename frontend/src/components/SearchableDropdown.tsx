import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface SearchableDropdownProps {
  options: Option[];
  placeholder?: string;
  onChange: (item: Option | null) => void;
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  placeholder = "Select an option...",
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredOptions(
      options.filter((option) => option.label.toLowerCase().includes(value))
    );
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm(""); // Clear search term when an option is selected
    onChange(option); // Notify parent component of the selection
  };

  return (
    <div className="relative">
      {/* Selected Option or Placeholder */}
      <div
        className="p-2 border border-gray-300 rounded-md cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption ? (
          <span>{selectedOption.label}</span>
        ) : (
          <span className="text-gray-400 select-none">{placeholder}</span>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {/* Search Input */}
          <input
            type="text"
            className="w-full p-2 border-b border-gray-200 focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* Options List */}
          <ul className="overflow-y-auto max-h-40">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
