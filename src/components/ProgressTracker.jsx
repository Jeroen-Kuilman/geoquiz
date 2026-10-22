export default function ProgressTracker({ progress, current, total }) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}>
        {current}/{total}
      </div>
    </div>
  );
}
