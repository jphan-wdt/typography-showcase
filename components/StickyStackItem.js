export default function StickyStackItem({ children }) {
  return (
    <div
      className={`sticky top-0 mt-[10vh] overflow-hidden border-y-2 border-black bg-black`}
    >
      {children}
    </div>
  );
}
