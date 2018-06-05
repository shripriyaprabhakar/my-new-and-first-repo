 
 var snippets = {code : []}

$(document).ready(function() {
  

  $(".setData").on('click', function() {
    let textAreaValue = $('.textArea').val();
    let textFieldValue = $('.textField').val();
    
     $('.debug').text(textAreaValue);
     // console.log(textFieldValue);
      localStorage.setItem('myFormTextData', textFieldValue);
       $('.textField').val('');
      localStorage.setItem('myFormSnippetData', textAreaValue);
      $('.textArea').val('');
      var testObject = {};
        testObject[textFieldValue] = textAreaValue;
        snippets.code.push(JSON.stringify(testObject));
  });

  $(".getData").on('click', function() {
    let retrievedData = localStorage.getItem('myFormTextData');
     $('.codeContainer').text(retrievedData);
    let retrievedSnippetData = localStorage.getItem('myFormSnippetData');
     $('.debug').text(retrievedSnippetData);
     $('.snippetContainer').text('retrieveSnippetName: ' + retrieveSnippetName + ' retrieveSnippetData: ' + retrieveSnippetData );
   
  });
  

  });


  // var testObject = { 
  //   'isSorted': function isSorted(arr){
  //     let direction = -(arr[0] - arr[1]);
  //      for (let [i, val] of arr.entries()) {
  //       direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
  //        if (i === arr.length - 1) return !direction ? 0 : direction;
  //          else if ((val - arr[i + 1]) * direction > 0) return 0;
  //       } 
  //    }, 
  //   'findLastIndex': function findLastIndex (arr, fn){
  //     arr
  //      .map((val, i) => [i, val])
  //        .filter(([i, val]) => fn(val, i, arr))
  //          .pop()[0]
  //     }, 
  //  };
// console.log('typeof testObject: ' + typeof testObject);
// console.log('testObject properties:');
// for (var prop in testObject) {
//     console.log('  ' + prop + ': ' + testObject[prop]);


// Put the object into storage


// Retrieve the object from storage

// $('.codeName').on('keyup', function() {
//     let textAreaValue = $('.codeName').val();
//     $('body').text(textAreaValue);
//     localStorage.setItem('testObject', JSON.stringify(testObject.code));
//     var inputOne = $('.codeName').val('');
//  $(".addcode").on('click', function() {
//   for (var key in testObject)
//   if (inputOne === key)
//    var retrievedObject = localStorage.getItem('testObject');
//    $('body').text(retrievedObject);
//    });

//  });





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

// Storage.prototype.object = function(key, val) {
//     if ( typeof val === "undefined" ) {
//         var value = this.getItem(key);
//         return value ? JSON.parse(value) : null;
//     } else {
//         this.setItem(key, JSON.stringify(val));
//     }
// }
// localStorage.object("isSorted", {code : function isSorted(arr){
//    let direction = -(arr[0] - arr[1]);
//    for (let [i, val] of arr.entries()) {
//      direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
//      if (i === arr.length - 1) return !direction ? 0 : direction;
//      else if ((val - arr[i + 1]) * direction > 0) return 0;
//    } 
//  }
// });

// localStorage.object("findLastIndex", {code : function findLastIndex (arr, fn){
//   arr
//     .map((val, i) => [i, val])
//     .filter(([i, val]) => fn(val, i, arr))
//     .pop()[0]
//   }
//   });


// $('.codeName').on('keyup', function() {
//   var whatCode = +$(this).val();
// $(".addcode").on('click', function() {
//   var retrievedCode = localStorage.object('whatCode');
//   $('.debug').text(retrievedCode);

//   });

// });

// 