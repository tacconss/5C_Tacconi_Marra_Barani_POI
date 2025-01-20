const myToken = 'c6664b7e-16c5-4a74-931e-377b271f30b2';
const myKey = 'luogo';

export const generateFetchComponent = () => {
 // let token;

  return {
      build: (inputToken) => {
          myToken = inputToken;
      },
      setData: (data) => {
          return new Promise((resolve, reject) => {
              fetch("https://ws.cipiaceinfo.it/cache/set", {
                  method: "POST",
                  headers: {
                      "content-type": "application/json",
                      "key": myToken 
                  },
                  body: JSON.stringify({
                      key: myKey,
                      value: JSON.stringify(data)
                  })
              })
              .then(r => r.json())
              .then(data => resolve(data.result))
              .catch(err => reject(err.result));
          });
      },
      getData: () => {
          return new Promise((resolve, reject) => {
              fetch("https://ws.cipiaceinfo.it/cache/get", {
                  method: "POST",
                  headers: {
                      "content-type": "application/json",
                      "key": myToken
                  },
                  body: JSON.stringify({
                      key: myKey
                  })
              })
              .then(r => r.json())
              .then(data => {
                  let dict = JSON.parse(data.result);
                  console.log("result " + dict)
                  resolve(dict);
              })
              .catch(err => reject(err.result));
          })
      }
  };
}