import React, { PropTypes } from 'react';
import ReactPaginate from 'react-paginate';
import Before from 'material-ui/svg-icons/image/navigate-before';
import Next from 'material-ui/svg-icons/image/navigate-next';

const calculateRange = (totalPages, currentPage) => {
  const maxRange = 10;
  const minRange = 6;
  if (totalPages <= maxRange) {
    return maxRange;
  } else if (currentPage <= maxRange - minRange) {
    return minRange + 1;
  } else if ((totalPages - currentPage) < maxRange - minRange) {
    return minRange + 2;
  }
  return minRange;
};

const Pagination = ({
  page,
  totalNumberOfPages,
  onChange,
  marginPages,
  theme,
  ...props,
}) => {
  const pageRangeDisplayed = calculateRange(totalNumberOfPages, page);
  return totalNumberOfPages > 1 ? (
    <ReactPaginate
      pageCount={totalNumberOfPages}
      pageRangeDisplayed={pageRangeDisplayed}
      forcePage={page - 1}
      initialPage={page - 1}
      previousLabel={<Before color="#3b73b3">navigate_before</Before>}
      nextLabel={<Next color="#3b73b3">navigate_next</Next>}
      breakLabel={'...'}
      breakClassName={theme.break}
      marginPagesDisplayed={marginPages}
      containerClassName={theme.pagination}
      pageClassName={theme.page}
      activeClassName={theme.active}
      previousClassName={theme.prev}
      nextClassName={theme.next}
      disabledClassName={theme.disabled}
      onPageChange={({ selected }) => {
        if (selected + 1 !== page) {
          onChange(selected + 1);
        }
      }}
      {...props}
    />
  ) : null;
};

Pagination.propTypes = {
  page: PropTypes.number,
  onChange: PropTypes.func,
  pageRange: PropTypes.number,
  marginPages: PropTypes.number,
  totalNumberOfPages: PropTypes.number,
  theme: PropTypes.shape({
    page: PropTypes.string,
    active: PropTypes.string,
    prev: PropTypes.string,
    next: PropTypes.string,
    break: PropTypes.string,
    pagination: PropTypes.string,
    disabled: PropTypes.string,
  }),
};

Pagination.defaultProps = {
  marginPages: 1,
};

export default Pagination;
