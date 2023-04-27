import React from 'react';

const MySelect = ({option, defaultValue}) => {
    return (
        <select>
            <option disabled value="">{defaultValue}</option>
            {option.map(option =>
                <option value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;
