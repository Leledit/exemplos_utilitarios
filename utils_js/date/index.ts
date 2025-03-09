export function getCurrentTimestamp(): string {
  const date = new Date();

  // Formata a data com milissegundos
  const isoString = date.toISOString();

  // Extrai o offset de fuso horário
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
  const minutes = String(Math.abs(offset) % 60).padStart(2, "0");

  return `${isoString.slice(0, -1)}${sign}${hours}:${minutes}`;
}

export function returnYearBasedDate(dateString: string) {
  const date = new Date(dateString);
  return date.getFullYear();
}

export function getCurrentDate() {
  return new Date(Date.now());
}

export function formatDateToPtBr(dateUtc: string):string {

  if(!dateUtc){
    return "";
  }

  const date = new Date(dateUtc);

  // Utilizando Intl.DateTimeFormat para formatar para PT-BR
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
};
  const formattedDate = new Intl.DateTimeFormat("pt-BR", options).format(
    date
  );
  return formattedDate
}