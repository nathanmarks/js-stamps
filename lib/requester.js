import Request from 'request-promise';
import Stampit from 'stampit';

const Requester = Stampit().props({
  opts: {
    request: {}
  }
}).methods({

  request (uri, opts = {}) {

    Object.assign(opts, this.opts.request);

    if (typeof uri === 'object' && uri !== null) {
      Object.assign(opts, { ...uri });
    }

    return Requester.request(uri, opts);
  }

}).static({

  request (uri, opts = {}) {

    if (typeof uri === 'object' && uri !== null) {
      Object.assign(opts, { ...uri });
    } else if (typeof uri === 'string') {
      opts.uri = uri;
    }

    return Request(opts);
  }

});

export default Requester;
