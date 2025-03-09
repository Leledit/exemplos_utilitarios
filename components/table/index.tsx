import {
  Paper,
  styled,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "./index.module.scss";
import BasicTooltip from "../tooltip";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

export const BasicTableCellHeader = styled(TableCell)(({ theme }) => ({
  color: "#fff",
}));

export const BasicTableCell = styled(TableCell)(({ theme }) => ({
  color: "#000",
}));

interface IProps {
  header: any;
  body: any;
  returnToPreviousPage: any;
  advanceToNextPage: any;
  isPaginated?: boolean;
  pageNumber?: number;
  totalPage?: number;
  totalElements?: number;
}

export function BasicTableContainer({
  header,
  body,
  returnToPreviousPage,
  advanceToNextPage,
  isPaginated = false,
  pageNumber = 0,
  totalPage = 0,
  totalElements = 0,
}: Readonly<IProps>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow style={{ background: "#3366ff" }}>
            {header}
          </StyledTableRow>
        </TableHead>
        {body}
        {isPaginated ? (
          <TableFooter>
            <TableRow>
              <div className={styles.containerPagination}>
                <div className={styles.pageMarker}>
                  <p className={styles.element}>{pageNumber}</p>
                  <p className={styles.element}>-</p>
                  <p className={styles.element}>{totalPage}</p>
                  <p className={`${styles.element} ${styles.elementOf}`}>de</p>
                  <p className={styles.element}>{totalElements}</p>
                </div>
                <div className={styles.options}>
                  <BasicTooltip title="Anterior">
                    <KeyboardArrowLeftIcon
                      className={`${styles.option}`}
                      onClick={() => {
                        returnToPreviousPage();
                      }}
                    />
                  </BasicTooltip>
                  <BasicTooltip title="Proximo">
                    <KeyboardArrowRightIcon
                      className={`${styles.option}`}
                      onClick={() => {
                        advanceToNextPage();
                      }}
                    />
                  </BasicTooltip>
                </div>
              </div>
            </TableRow>
          </TableFooter>
        ) : (
          <></>
        )}
      </Table>
    </TableContainer>
  );
}
