const Card = ({ items = [], renderContent }) => {
  return (
    <div className="flex justify-center items-start gap-4 flex-wrap m-2 overflow-x-auto w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow-md hover:shadow-lg flex-shrink-0 w-48"
        >
          {renderContent(item)}
        </div>
      ))}
    </div>
  );
};

export default Card;
