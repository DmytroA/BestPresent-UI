import hotels from './hotels';
import countries from './countries';

export default function* rootSaga() {
  yield [
    hotels(),
    countries(),
  ];
}
