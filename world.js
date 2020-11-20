window.onload = function() {
    const lookup = document.querySelector('#lookup');
    var result = document.querySelector('#results');
    $.ajax({
        url: 'world.php',
        type: 'GET',
        success: function(response)
        {result.innerHTML=response;}
    });

    lookup.addEventListener('click', function(event){
        event.preventDefault();
        var search = document.getElementById("country").value;
        $.ajax({
            url: 'world.php', 
            type: 'GET',
            data: { "country": search},
            success:function(response)
            {result.innerHTML = response;}
        });
    });
}