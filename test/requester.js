import Test from 'tape';
import Requester from 'lib/requester';
import Nock from 'nock';

Test('Requester', t => {

  t.ok(Requester, 'Should exist');

  t.equals(
    typeof Requester.request,
    'function',
    'Should have a static request function'
  );

  Nock('https://stampit.org').get('/').times(2).reply(200, 'Hello World!');

  Requester.request('https://stampit.org').then(response => {
    t.equals(response, 'Hello World!', 'Should make requests using the static function');
  });

  const requester = Requester({
    opts: {
      request: {
        uri: 'https://stampit.org'
      }
    }
  });

  requester.request('https://stampit.org').then(response => {
    t.equals(response, 'Hello World!', 'Should make requests using an object produced by the factory');
  });

  t.end();

});
