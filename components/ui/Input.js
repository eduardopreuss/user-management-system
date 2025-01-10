
export default function Input({ label, ...props }) {
  return (
    <>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label> }
      <input
        className="mt-1 block w-full rounded-md px-2 py-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        {...props}
      />
    </>
  );
}
