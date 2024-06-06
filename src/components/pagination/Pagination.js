export default function Pagination({
  nextFunction,
  previousFunction,
  endIndex,
}) {
  return (
    <>
      {endIndex > 20 && (
        <button onClick={previousFunction}>Voltar página</button>
      )}
      {endIndex < 100 && <button onClick={nextFunction}>Próxima página</button>}
    </>
  );
}
