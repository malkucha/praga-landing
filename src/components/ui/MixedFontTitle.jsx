const MixedFontTitle = ({ firstLetter, restOfText, className = "" }) => {
  return (
    <h1 className={`inline ${className}`}>
      <span className="font-sloop text-5xl text-amber-700 font-bold mr-1">
        {firstLetter}
      </span>
      <span className="font-agrandir text-4xl text-gray-800">
        {restOfText}
      </span>
    </h1>
  );
};

export default MixedFontTitle;
