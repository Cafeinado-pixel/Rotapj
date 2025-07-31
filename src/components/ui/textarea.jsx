export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`border rounded-lg px-3 py-2 w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
      rows={4}
      {...props}
    />
  );
}
