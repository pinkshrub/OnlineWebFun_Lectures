$(document).ready(function(){
  $('div').on('click', 'h2', function(){
    console.log('h2 clicked');
    console.log($(this));
    $('div').append('<h2>I am another header!</h2>');
  })
});
