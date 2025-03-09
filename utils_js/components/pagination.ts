export function handlePageChange(
  direction: "next" | "prev",
  qtdItens: number,
  setCurrentPage: (page: any) => void,
  ITEMS_PER_PAGE: number,
) {
  const maxPage = Math.ceil(qtdItens / ITEMS_PER_PAGE);

  setCurrentPage((prev:any) =>
    direction === "next" ? Math.min(prev + 1, maxPage) : Math.max(prev - 1, 1)
  );
}
