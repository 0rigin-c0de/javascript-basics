function getSomeData(url) {
  ajax(url, function onResponse(resp) {
    `Response (from ${url}): ${resp}`;
  });
}

getSomeData("https://github.com/0rigin-c0de");
