export const SelectField = (props) => {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={props.name}
        className="mb-2 text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <select
        name={props.name}
        id={props.name}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={props.defaultValue || ""}
      >
        {props.options?.map((option) => (
          <option key={option.value} value={option.value}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>

            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
