const MediaCard = ({ image, title, subtitle }) => {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition cursor-pointer">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {subtitle}
        </p>

      </div>
    </div>
  );
};

export default MediaCard;