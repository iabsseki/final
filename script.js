new Vue({
  el: "#store-app",
  data: {
    showPopUp: false, // show details popUp enabler/disabler
    showNewInst: false, // show new instrument popUp enabler/disabler
    showEmpty: false, // show store empty text enabler/disabler
    reqsMet: false, // this value is what allows new instrument to be added if all conditions are met
    popUpIndexEr: null, // relates to pop up add to cart button

    cartItems: [],
    popUpItem: {},

    newName: "",
    newType: "",
    newBrand: "Yamaha",
    newPrice: "",
    newImg: "",

    instruments: [
      {
        name: "NTX5",
        type: "Guitar",
        brand: "Yamaha",
        price: 3020.0,
        img:
          "https://usa.yamaha.com/files/NTX5_NT_a_0001_bcedc4ef5c1694174d29521f0126c4ff.jpg?impolicy=resize&imwid=4000&imhei=4000"
      },
      {
        name: "YTR-300ADS Advantage Intermediate Bb",
        type: "Trumpet",
        brand: "Yamaha",
        price: 1875.0,
        img:
          "https://usa.yamaha.com/files/YTR-300ADS_735x735_735x735_4323a1e04912d55f67b332c39017c86f.jpg"
      },
      {
        name: "American Acoustasonic Stratocaster Ziricote",
        type: "Acoustic Guitar",
        brand: "Fender",
        price: 3299.99,
        img:
          "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0972023097_fen_ins_frt_1_rr.jpg"
      },
      {
        name: "American Professional II Jazz Bass",
        type: "Bass Guitar",
        brand: "Fender",
        price: 1599.99,
        img:
          "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0193972718_fen_ins_frt_1_rr.jpg"
      },
      {
        name: "The Blackwood 808",
        type: "Ukulele",
        brand: "Maton",
        price: 1899.99,
        img: "https://maton.com.au/assets/uploads/products/EBW808Hero.png"
      },
      {
        name: "Mayonnaise",
        type: "Condiment",
        brand: "Maton",
        price: 49.99,
        img:
          "https://i5.walmartimages.com/asr/e43ce981-5c60-4d00-8043-0ab531483f77_2.8ba1afc4d7dda86ad6141ce08a71df09.png"
      }
    ]
  },

  methods: {
    // function for showing instrument detail popup
    popUpDetails: function (inst, index) {
      this.popUpIndexEr = index; // sets popUpIndexEr equal to index value for PU add to cart removal
      this.popUpItem = inst;
      this.showPopUp = true;
    },

    // function for removing add instrumnent popUp & clearing the data fields
    removePopUp: function () {
      this.newName = "";
      this.newType = "";
      this.newBrand = "Yamaha";
      this.newPrice = "";
      this.newImg = "";
      this.showNewInst = false;
    },

    // function for adding new instrument to instruments array when button is pressed
    newInst: function () {
      if (this.newImg === "") {
        // adds broken image url if newImg is left blank
        this.newImg =
          "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
      } else {
        this.newImg = this.newImg;
      }

      this.instruments.push({
        // pushes inputs into instrument array
        name: this.newName,
        type: this.newType,
        brand: this.newBrand,
        price: this.newPrice,
        img: this.newImg
      });

      // clears values after pushing items to array
      this.newName = "";
      this.newType = "";
      this.newBrand = "Yamaha";
      this.newPrice = "";
      this.newImg = "";
      this.showNewInst = false;
    },

    // function for making add to cart button push item into array & remove element from screen
    addToCart: function (inst, index) {
      this.showPopUp = false;
      this.cartItems.push(inst);
      this.instruments.splice(index, 1); // removes item from instrument array at index splice point
    },

    // function for making add to cart button within details push item into array & remove element from screen
    addToCart2: function (inst) {
      this.cartItems.push(inst);
      this.instruments.splice(this.popUpIndexEr, 1); // removes item from instrument array at index splice point
    },

    // function for emptying cart when pressed
    emptyCart: function () {
      this.instruments = this.instruments.concat(this.cartItems);
      this.cartItems = []; // empties cart array by blanking it
    },

    // function for assigning 'no image available' if input url is broken (aka if it throws an error in HTML)
    imageUrlAlt(event) {
      event.target.src =
        "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
    }
  },

  computed: {
    // function that updates as values are inserted into form inputs. this pdates dynamically on form as info is entered
    whatLeft: function () {
      if (
        this.newName.length < 1 &&
        this.newType.length < 1 &&
        this.newPrice.length < 1
      ) {
        this.reqsMet = false;
        return "‏‏‎ ‎";
      } else if (
        this.newName.length >= 1 &&
        this.newType.length < 1 &&
        this.newPrice.length < 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument type & price.";
      } else if (
        this.newName.length < 1 &&
        this.newType.length >= 1 &&
        this.newPrice.length < 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument name & price.";
      } else if (
        this.newName.length < 1 &&
        this.newType.length < 1 &&
        this.newPrice.length >= 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument name & type.";
      } else if (
        this.newName.length >= 1 &&
        this.newType.length >= 1 &&
        this.newPrice.length < 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument price.";
      } else if (
        this.newName.length < 1 &&
        this.newType.length >= 1 &&
        this.newPrice.length >= 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument name.";
      } else if (
        this.newName.length >= 1 &&
        this.newType.length < 1 &&
        this.newPrice.length >= 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument type.";
      } else if (
        this.newName.length >= 1 &&
        this.newType.length >= 1 &&
        this.newPrice.length >= 1 &&
        this.newImg.length < 10
      ) {
        this.reqsMet = true;
        return "You can now submit. Feel free to add an image if you'd like! Not necessary, tho.";
      } else {
        this.reqsMet = true;
        return "You can now submit. Nice job adding an image!";
      }
    }
  },

  watch: {
    // function for displaying empty cart text if instrument array is empty
    instruments: function () {
      if (this.instruments.length <= 0) {
        this.showEmpty = true;
      } else {
        this.showEmpty = false;
      }
    }
  }
});

// play music & stop music functions that happen on hover of 'click me!'
var first = 0;
function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  if (first < 1) {
    thissound.currentTime = 1;
  }
  thissound.volume = 0.15;
  thissound.play();
  first = first + 1;
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
}
