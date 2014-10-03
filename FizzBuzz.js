function fizzbuzz() {
  for(var i = 1; i <=1000; i++) {
    var ret_string = ""
    if (i % 3 == 0) {
      ret_string += "Fizz";
    }

    if (i % 5 == 0) {
      ret_string += "Buzz";
    }

    if (ret_string == "") {
      console.log(i);
    } else {
      console.log(ret_string);
    }
  }
}

fizzbuzz();