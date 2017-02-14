import './accounts';
import './browserPolicy';
import './prerenderio';
import './serviceConfiguration';
import './publications';

if (process.env.NODE_ENV !== 'production') {
  import './sampleData';
}
