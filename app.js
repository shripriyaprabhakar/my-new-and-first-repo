

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
  
 var funcIsSorted = ( function isSorted(arr) {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
}).toString();


   $(".addcode").on('click', function() {
    // let textAreaValue = $('.textArea').val();
    // $('textAreaValue').append("<div>isSorted</div>");
    // $('.codeContainer').text(textAreaValue);
    // let snippetIsSorted = localStorage.getItem('textAreaValue');
      var $textAreaValue= $('<div class="codeContainer">' + funcIsSorted + '</div>');
        $('body').append($textAreaValue);
  });
 


});

