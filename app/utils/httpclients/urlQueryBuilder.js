const UrlBuilder = () => {
  // eslint-disable-next-line no-underscore-dangle
  let _url;
  // eslint-disable-next-line no-underscore-dangle
  let _queryParams;
  // eslint-disable-next-line no-underscore-dangle
  let _pathParams;
  // eslint-disable-next-line no-underscore-dangle
  let _paginationParams;
  // eslint-disable-next-line no-underscore-dangle
  let _sortingParams;

  const builder = {
    setUrl: url => {
      _url = url;
      return builder;
    },
    setQueryParams: queryParams => {
      _queryParams = queryParams;
      return builder;
    },
    setPathParams: pathParams => {
      _pathParams = pathParams;
      return builder;
    },
    setPaginationParams: paginationParams => {
      _paginationParams = paginationParams;
      return builder;
    },
    setSortingParams: sortingParams => {
      _sortingParams = sortingParams;
      return builder;
    },
    // eslint-disable-next-line object-shorthand
    build: () =>
      urlQueryBuilder(_url, {
        queryParams: _queryParams,
        pathParams: _pathParams,
        paginationParams: _paginationParams,
        sortingParams: _sortingParams,
      }),
  };
  return builder;
};

const urlQueryBuilder = (endPoint, pageableRequestParamState) => {
  let url = endPoint;
  if (!endPoint) {
    throw Error('Endpoint must not be empty');
  }
  if (!pageableRequestParamState) {
    throw Error('Pageable request param state must not be empty');
  }

  const {queryParams, pathParams, paginationParams, sortingParams} =
    pageableRequestParamState;

  if (queryParams && typeof queryParams === 'object') {
    const params = Object.keys(queryParams);
    params.forEach(key => {
      url = updateQueryStringParameter(url, key, queryParams[key]);
    });
  }

  if (pathParams && typeof pathParams === 'object') {
    url = interpolateUrl(url, pathParams);
  }

  if (
    paginationParams &&
    paginationParams.page !== undefined &&
    paginationParams.size
  ) {
    url = updateQueryStringParameter(url, 'page', paginationParams.page);
    url = updateQueryStringParameter(url, 'size', paginationParams.size);
  }

  if (sortingParams) {
    const {orderDirection, orderBy} = sortingParams;
    if (orderBy) {
      url = updateQueryStringParameter(
        url,
        'sort',
        `${orderBy.field},${(orderDirection || '').toUpperCase()}`,
      );
    }
  }
  return url;
};

const interpolateUrl = (string, values) =>
  string.replace(/{(.*?)}/g, (match, offset) => values[offset]);

const updateQueryStringParameter = (uri, key, value) => {
  const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
  const separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    return uri.replace(re, `$1${key}=${value}$2`);
  }

  return `${uri + separator + key}=${value}`;
};

export default UrlBuilder;
