$(document).ready(function() {

    $('#check input[type="checkbox"]').click( () => {
        if($('#check input[type="checkbox"]').prop('checked') == true) {
            $('#next').css('background-color', '#43b581');
            $('#warning').hide(500);
        } else {
            $('#next').css('background-color', '#f04747');
        }
    })

    
    $('#next').click( (e) => { 
        e.preventDefault();
        if($('#check input[type="checkbox"]').prop('checked') == false) {
            $('#warning').show(500);
        } else {
            $('#warning').hide(500);
            $('#rules').hide(500);
            $('#faq').show(500);
        }
    });

    $('#year-role').click( () => {
        console.log($('#year-role').val())
    })

    $('#year-role').change((e) => { 
        e.preventDefault();
        if($('#year-role').val() != '__select') {
            $('#verify').show();
        } else {
            $('#verify').hide();
        }  
    })

});
