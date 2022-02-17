if (!Promise.allSettled) {
  const rejectHandler = reason => ({
    status: 'rejected',
    reason
  });

  const resolveHandler = value => ({
    status: 'resolved',
    value
  });

  Promise.allSettled = function (promises) {
    const optimisedPromises = promises.map((promise) => Promise.resolve(promise).then(resolveHandler, rejectHandler));
    return Promise.all(optimisedPromises);
  }
}