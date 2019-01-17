import * as admin from 'now-firebase-admin-database'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      'type': 'service_account',
      'project_id': 'vul-demo',
      'private_key_id': 'e611149247ad70cc8c0ccbda15b760002938be94',
      'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCusEyfjrzLNTnO\nfcCAEtye7AVqjyHIGoMwA3vYdHT4JENaFLsDPMG43XoJIWgvgqUYt133oaQxfNku\nWbL7AtJAg8w/4/2ZPm5amDMDba5ujtRPrsWAXPzqWka3Qa1EAJuXjBWkgpUFJFOM\nkOKhNdACI+oTsUj/9sVbaSmFEFCNt/PKvr7JKKsC0pdr2fLJpT0GV50PuHInZYxN\njSHrsImdhNUXBHQnm9WdzpaIH+csBAnNaIQR24mdUhFR0G9pHMNZbvyzmsgoQ6LH\ngxUCRUXkXhvlTZWfZumRIWlkn6NKleLN2Ghmx+l2BG0CPCTMrb0IWaJSWeHDx54R\n+25FMtn3AgMBAAECggEAR2j1YbJhVfZzo4g/dXuAaYzVJ/rL1feUkj+SVGlC2Z9F\nUyEvU8L19CLBfNMFuoo/ACwRQyX2L264f1yWsEq2dT4LdEC4jfj59pnKHMgs6rAD\ndXFd9jvM/eYai1ZTRH21HQ3cWQwya9AuQUOHCVyso/tXeGZcD5qqkdQa73S8YTnY\n7nkbMxVYD8FQhswo5pYUwfQJ6hdNWsAkXh/d08mivDvfKPHcEET2VIxur7ILXlAF\nOV+/YoCJHri1n8aPqRTQPdwcwSmRCD8SS4QRNbClomks1bh6PwLTV5BMl5itF0ys\nBNIYqs9P9JKTEd3QDvpTzQueqIwQ8mjjhqkrfZ/Q0QKBgQDbyNc0A2XngoEsWlEO\nsx7PUkLb3MsED5Gvq3ywg9mRSdzcw9JFdl2NMC7KBGraBzoeH+Ap3eicAAjCi7AE\nBNJQShoBO/dC9nbW9Z+Egn24C0X8DPCtVQOgoQ3lf3MD1ZjOBAp+NsDhJWns1pU2\nNQuYu52ITto0Fq8/HG6IMZjlsQKBgQDLeS6k0viVmFZYo6+uHY7n5oSCTXTi58NI\nHfIm8SKkDCLSrDwzjhBi5HXS1Fv6W9SJXGy773vPtSX8n9Xhppyk1CaM5/eDK6ec\nLLijb5kyV8GBTJlu25gtPLJY63bQ1MWM6EkjtWZ7KQYZtfw3eGWpXPEeerUzFR1S\nRNJtxfCcJwKBgQDRFHGtGGJz51GM6OpdaoavwVi7IYK7/TehfyiiHvv1W+fQ2DSL\nQfvjGWgZZDRl7yQZjkdIbMMgzGOI9yvd1txf5u5wKCSjviT1fzpd62k/kPHlwkWf\nDtXhk/TNUv4OMr8nlO6KfPnl9RqcZNITfEjo5eoJxsGLdd0G07xOsaf7MQKBgAnP\nlggsg//ykHdFrTrgAfv8iXce9Pvb4PahOwPVrK3sR+GQnHZ/6xpZmbTIuIah1uWo\npzWInpetTF+Z9V4kAnmQISu6I50XhcVqAp0ezGw4/wOVBfDqdbP4sUDIWbpICB57\nNMub+40EtV6X/8lM7Nn1uUqW8BW+duN4ngzc9nURAoGBALlh86uDxkAncESRwINP\nIl6cGe4C+/GzHVdkAnwUkU6MhBNqb5DOJNkFnHM9CCDVZ+oDRoMv+QiwZSOI+Cx6\nk5P3Uqz0pfzwUKm3nh4UJbkeVhEdKzugs1thGRZn7MZ2tzfwK2S96LSggrIcVwEB\nY8gHwDIBsw/O79y7cnPlf5f/\n-----END PRIVATE KEY-----\n',
      'client_email': 'firebase-adminsdk-0noto@vul-demo.iam.gserviceaccount.com',
      'client_id': '110825771728394554749',
      'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
      'token_uri': 'https://oauth2.googleapis.com/token',
      'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
      'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-0noto%40vul-demo.iam.gserviceaccount.com'
    }
    ),
    databaseURL: 'https://vul-demo.firebaseio.com'
  })
}

export default admin

const initFirebase = () => {}

export {
  initFirebase
}
