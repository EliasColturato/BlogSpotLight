import { WrapperButtons, PreviousButton, NetxButton } from './styledPagination';

export default function Pagination({
  nextFunction,
  previousFunction,
  endIndex,
}) {
  return (
    <WrapperButtons>
      {endIndex > 20 && (
        <PreviousButton onClick={previousFunction}>
          Voltar página
        </PreviousButton>
      )}
      {endIndex < 100 && (
        <NetxButton onClick={nextFunction}>Próxima página</NetxButton>
      )}
    </WrapperButtons>
  );
}
