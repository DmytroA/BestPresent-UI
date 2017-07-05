import { themr } from 'react-css-themr';
import Pagination from './pagination';
import theme from './theme.scss';

const applyTheme = Component => themr('Pagination', theme)(Component);
const ThemedPagination = applyTheme(Pagination);

export { ThemedPagination as Pagination };
