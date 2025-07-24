// components/ProgressBar.tsx
type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full mb-6">
      <div className="text-sm text-gray-700 mb-1 text-center">
        Otázka {current} z {total}
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
