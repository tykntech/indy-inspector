export default {
  network: 'sovbuilder',
  pagesize: 10,
  apiurl: 'https://rest-api.tykn.tech',
  wsurl: 'rest.api.tykn.tech',
  isUpdateLive: false,
  intervals: {
    DOMAIN: undefined,
  },
  colors: {
    cred_def: '#44368E',
    attrib: '#F65521',
    txn_author_agreement: '#7924CE',
    txn_author_agreement_aml: '#E56E00',
    nym: '#209F8E',
    schema: '#F6C330',
    node: '#A6ACBE',
    revoc_reg_def: '#000000',
    revoc_reg_entry: '#A6ACBE',
    pool_upgrade: '#007AFF',
    node_upgrade: '#219032',
    pool_config: '#14247A',
    auth_rules: '#9F2020',
  },
  nets: {
    sovbuilder: {
      nymCache: {},
      DOMAIN: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
      POOL: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
      CONFIG: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
    },
    sovmain: {
      nymCache: {},
      DOMAIN: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
      POOL: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
      CONFIG: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
    },
    sovstaging: {
      nymCache: {},
      DOMAIN: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
      POOL: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
      CONFIG: {
        page: 1,
        size: 0,
        txns: [],
        loadedTxns: [],
      },
    },
  },
  highlighted: null,
};
