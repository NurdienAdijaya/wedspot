import * as types from "../const/types";

const initialState = {
  listQuotationSent: {
    sentLoading: false,
    sentSuccess: false,
    sentError: false,
    sentList: [],
    sentMessage: [],
  },
  listQuotationInbox: {
    inboxLoading: false,
    inboxSuccess: false,
    inboxtError: false,
    inboxList: [],
    inboxMessage: [],
  },
};

const quotation = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case types.GET_QUOTATION_SENT_BEGIN:
      return {
        ...state,
        listQuotationSent: {
          sentLoading: true,
        },
      };
    case types.GET_QUOTATION_SENT_SUCCESS:
      return {
        ...state,
        listQuotationSent: {
          sentList: payload,
          sentLoading: false,
        },
      };
    case types.GET_QUOTATION_SENT_FAIL:
      return {
        ...state,
        listQuotationInbox: {
          inboxLoading: false,
          inboxSuccess: false,
          error: error,
          inboxMessage: payload,
        },
      };
    case types.GET_QUOTATION_INBOX_BEGIN:
      return {
        ...state,
        listQuotationInbox: {
          inboxLoading: true,
        },
      };
    case types.GET_QUOTATION_INBOX_SUCCESS:
      return {
        ...state,
        listQuotationInbox: {
          inboxList: payload,
          inboxLoading: false,
        },
      };
    case types.GET_QUOTATION_INBOX_FAIL:
      return {
        ...state,
        listQuotationinbox: {
          inboxLoading: false,
          inboxSuccess: false,
          error: error,
          inboxMessage: payload,
        },
      };
  }
};

export default quotation;
