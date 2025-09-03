export const Card = (props) => {
  return (
    <div className="max-w-sm w-48 rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={props.image} alt={props.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
    </div>
  );
};
