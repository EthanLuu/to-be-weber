const request1 = function () {
  const promise = new Promise((resolve) => {
    request("https://www.ethanloo.top", function (response) {
      if (response.retCode == 200) {
        resolve("request1 success, " + response);
      } else {
        reject("failure");
      }
    });
  });
  return promise;
};

async function queryData() {
  const response = await request1();
  return response;
}

queryData().then((data) => {
  console.log(data);
});
