export const SearchMethod = ({ name }) => {
  return (
    <div>
      <input type="checkbox" name="byName" />
      <label htmlFor="byNAame">By {name}</label>
    </div>
  );
};
