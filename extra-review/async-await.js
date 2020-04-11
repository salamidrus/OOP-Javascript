let data = new Promise((resolve, reject) => {
  //   throw new Error("gagal gan");
  resolve("sukses gan");
  reject("gagal gan");
});

// data.then((data) => console.log(data)).catch((err) => console.log(err)); // promise

let asyncFunc = async () => {
  // async await
  try {
    let dataResponse = await data;
    console.log(dataResponse);
    return dataResponse;
  } catch (e) {
    // kalo gagal kesini
    console.log(e);
  }
};

asyncFunc();
