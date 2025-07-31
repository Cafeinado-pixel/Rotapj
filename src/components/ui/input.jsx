export function Input({ className = '', ...props }) {
  return (
    <input
      className={`border rounded-lg px-3 py-2 w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
      {...props}
    />
  );
}
