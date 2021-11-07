$('button').not('#enter').not('#remove').click(function(){
    var history = $('.history');
    history.append(this.innerHTML);
});

$('#enter').click(function() {
    var history = document.getElementById('history').innerHTML;
    document.getElementById('result').innerHTML = eval(history);
})
$('#clear').click(function() {
    document.getElementById('history').innerText = '';
    document.getElementById('result').innerText = '';
})

$('#remove').click(function() {
    $('.history').slice(0,-1);
    document.getElementById('history').innerText = $('.history').text().slice(0,-1);
})