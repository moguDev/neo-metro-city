export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-neon-orange">
      <div className="loading mb-2">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <p className="text-xs tracking-widest italic uppercase">
        Establishing uplink to MetroNet...
      </p>
    </div>
  );
}
