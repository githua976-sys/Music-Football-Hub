const StatBadge = ({ text }) => {
  return (
    <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
      {text}
    </span>
  );
};

export default StatBadge;