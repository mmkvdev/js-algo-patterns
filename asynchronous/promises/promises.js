// asynchronous javascript

// Promises

let learnJS = function (completed) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
          if (completed) {
            resolve('completed');
          } 
          reject('rejected');
      }, 3000);
    });
};

// then - onFulFilled, onRejected
learnJS(false).then(undefined, (res1) => console.log(res1));

// catch
learnJS(false).catch((res1) => console.log(res1));


// finally
learnJS(true).finally(() => console.log('invoking finally'));