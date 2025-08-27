export const InputField = (props) => {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={props.name}
        className="mb-2 text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="p-2 border border-gray-700 bg-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={props.name || ""}
      />
    </div>
  );
};
