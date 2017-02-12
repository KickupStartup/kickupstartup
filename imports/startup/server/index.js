import './mailService';
import './serviceConfiguration';
import './publications';

if (process.env.NODE_ENV !== 'production') {
  import './sampleData';
}
