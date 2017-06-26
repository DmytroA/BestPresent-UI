import hotels from './hotels';

export default function* rootSaga() {
  yield [
    hotels(),
  ];
}
