interface Props {
  fieldName: string;
  type: string;
  fieldId: string;
}

export default function CustomTextField({ fieldName, type, fieldId }: Props) {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold -mb-2"
        htmlFor={fieldName}
      >
        {fieldName}
      </label>
      <input
        type={type}
        id={fieldId}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
}
