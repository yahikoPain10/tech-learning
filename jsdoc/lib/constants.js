/**
 * Represents the state of an XMLHttpRequest.
 * @typedef {number} XMLHttpRequestReadyState
 */

/**
 * The request has been initialized, but not yet sent.
 * @constant
 * @type {XMLHttpRequestReadyState}
 */
const XMLHttpRequest_UNSENT = 0;

/**
 * The request has been set up, but not yet sent.
 * @constant
 * @type {XMLHttpRequestReadyState}
 */
const XMLHttpRequest_OPENED = 1;

/**
 * The request has been sent.
 * @constant
 * @type {XMLHttpRequestReadyState}
 */
const XMLHttpRequest_HEADERS_RECEIVED = 2;

/**
 * The request is in process; responseText holds partial data.
 * @constant
 * @type {XMLHttpRequestReadyState}
 */
const XMLHttpRequest_LOADING = 3;

/**
 * The request is complete; responseText holds the complete data.
 * @constant
 * @type {XMLHttpRequestReadyState}
 */
const XMLHttpRequest_DONE = 4;