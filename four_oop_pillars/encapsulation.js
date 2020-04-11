// Initial case
function Ongkir(berat) {
  this.pajak = 5000; // public
  this.biaya = function () {
    // public
    return berat * 1000;
  };

  this.totalBiaya = function () {
    // public
    return this.biaya() + pajak;
  };
}

const laptop = new Ongkir(4);
laptop.pajak = 100;

// console.log(laptop.totalBiaya(), "--ongkir laptop");

// console.log(laptop.totalBiaya(), "--initial");

// console.log(laptop.totalBiaya(), "--modified by public");

// encapsulation
function OngkirEncapsulate(berat) {
  const pajak = 500; // private
  this.alamat = "Ruang Kreasi"; // public

  let biaya = function () {
    return berat * 1000;
  };

  this.totalBiaya = function () {
    return biaya() + pajak;
  };

  this.showAlamat = function () {
    return this.alamat;
  };
}

let laptop1 = new OngkirEncapsulate(4);
laptop1.pajak = 1000;
// console.log(laptop1.showAlamat());
