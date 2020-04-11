function Ongkir(berat) {
  let biaya = function () {
    return berat * 1000;
  };

  let totalBiaya = function () {
    return biaya();
  };

  this.tampilkanBiaya = function () {
    return totalBiaya();
  };
}

const laptop = new Ongkir(4);
// console.log(laptop);
// console.log(laptop.tampilkanBiaya());
