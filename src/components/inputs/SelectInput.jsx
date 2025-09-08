import React from 'react';

function SelectInput({label, name, value, options, onChange,required = false}) {
    return (
        <div className="px-3 py-3">
            <label htmlFor={name} className="block font-semibold">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
                id={name}
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={required}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;