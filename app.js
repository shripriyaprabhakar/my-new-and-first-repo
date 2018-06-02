

$(document).ready(function() {

  $(".setData").on('click', function() {
    let textFieldValue = $('.textField').val();
     $('.debug').text(textFieldValue);
     // console.log(textFieldValue);
      localStorage.setItem('myFormTextData', textFieldValue);
       $('.textField').val('');
  });

  $(".getData").on('click', function() {
    let retrievedData = localStorage.getItem('myFormTextData');
     $('.debug').text(retrievedData);
  });
  
//  var funcIsSorted = ( function isSorted(arr) {
//   let direction = -(arr[0] - arr[1]);
//   for (let [i, val] of arr.entries()) {
//     direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
//     if (i === arr.length - 1) return !direction ? 0 : direction;
//     else if ((val - arr[i + 1]) * direction > 0) return 0;
//   }
// }).toString();


//    $(".addcode").on('click', function() {
//     // let textAreaValue = $('.textArea').val();
//     // $('textAreaValue').append("<div>isSorted</div>");
//     // $('.codeContainer').text(textAreaValue);
//     // let snippetIsSorted = localStorage.getItem('textAreaValue');
//       var $textAreaValue= $('<div class="codeContainer">' + (funcIsSorted.code) + '</div>');
//         $('body').append($textAreaValue);
//   });
// var obj={name:'isSorted', Code:function isSorted(arr){
//    let direction = -(arr[0] - arr[1]);
//    for (let [i, val] of arr.entries()) {
//      direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
//      if (i === arr.length - 1) return !direction ? 0 : direction;
//      else if ((val - arr[i + 1]) * direction > 0) return 0;
//    } 
//  }
// };



// $(".addcode").on('click', function() {
//   let textAreaValue = $('.textArea').val();
//   $('.debug').text(textAreaValue);
//   localStorage.setItem(JSON.stringify(funcIsSorted.code) , textAreaValue);
//     let retrievedCode = localStorage.getItem('JSON.parse(funcIsSorted.code)');
//      $('.debug').text(retrievedCode);
//   });

Storage.prototype.object = function(key, val) {
    if ( typeof val === "undefined" ) {
        var value = this.getItem(key);
        return value ? JSON.parse(value) : null;
    } else {
        this.setItem(key, JSON.stringify(val));
    }
}
localStorage.object("isSorted", {code : function isSorted(arr){
   let direction = -(arr[0] - arr[1]);
   for (let [i, val] of arr.entries()) {
     direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
     if (i === arr.length - 1) return !direction ? 0 : direction;
     else if ((val - arr[i + 1]) * direction > 0) return 0;
   } 
 }
});

localStorage.object("findLastIndex", {code : function findLastIndex (arr, fn){
  arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0]
  }
  });


$('.codeName').on('keyup', function() {
  var whatCode = +$(this).val();
$(".addcode").on('click', function() {
  var retrievedCode = localStorage.object('whatCode');
  $('.debug').text(retrievedCode);

  });

});

});