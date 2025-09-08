import React from 'react';

function TextInput({label,name,value,placeholder,onChange,required = false}) {
    return (
        <div className="px-3 py-3">
            <label htmlFor={name} className="block font-semibold">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                className="w-full p-2 border rounded"
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}

export default TextInput;