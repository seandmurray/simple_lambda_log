# Simple Lambda Logging

Copyright (c) 2019 Seán D. Murray
SEE MIT LICENSE FILE

NO dependency, very simple util to make logging to the lambda console debug/info/warn/error logs easier.

To turn off debug/info/warn/error set the following enviromental variables to any value:
NODEBUG='anyvaluehere'
NOINFO='anyvaluehere'
NOWARN='anyvaluehere'
NOERROR='anyvaluehere'

## Usage

```javascript
const Log = require('simple_lambda_logging');

// A default template applied to all levels.
let log = new Log('This default template used for all debug/info/warn/error. util.format syntax is %s here');
log.outDebug('will debug to console', 'will be be applied to the default template');
log.outInfo('will info to console', 'will be be applied to the default template');
log.outWarn('will warn to console', 'will be be applied to the default template');
log.outError('will error to console', 'will be be applied to the default template');

log = new Log(); // an empty template string is used for all levels
log.debug = 'a new debug %s format template';
log.outDebug('will debug to console', 'but will be be applied to the above over ride debug template');
log.outInfo('will info to console', 'will use the deafult template which is empty so shows just this string');
```
