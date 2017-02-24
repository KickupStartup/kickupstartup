import './accounts';
import './browserPolicy';
import './prerenderio';
import './serviceConfiguration';
import './publications';
import './systemUser';

if (process.env.NODE_ENV !== 'production') {
  import './sampleData';
}
