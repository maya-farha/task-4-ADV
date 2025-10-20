import "./SearchSection.css";
function SearchSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="searchSection">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default SearchSection;
