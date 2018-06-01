

$(document).ready(function() {

  $(".setData").on('click', function() {
    let textFieldValue = $('.textField').val();
    $('.debug').text(textFieldValue);
     // console.log(textFieldValue);
     localStorage.setItem('myFormTextData', textFieldValue);
     $('.textField').val('');
});

// $('.textField').on('keyup' , function(){
//   let textFieldValue = $('.textField').val();
//   $('.debug').text(textFieldValue);
// });
  $(".getData").on('click', function() {
    let retrievedData = localStorage.getItem('myFormTextData');
     $('.debug').text(retrievedData);
  });
  
});

