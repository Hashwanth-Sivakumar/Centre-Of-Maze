// JavaScript source code
$('#form').submit(function (e) {
var name = document.getElementById('name'),
    message = document.getElementById('textarea2');

    if (!name.value || !message.value) {
        alertify.error('Please check your entries');
    }
        else
        {
            $.ajax({
                url: "http://formspree.io/hashwanthsivakumar@gmail.com",
                method: "POST",
                data: $(this).serialize(),
                dataType:"json"

            });
            e.preventDefault()
            $(this).get(0).reset()
            alertify.success('Message sent');
        }
    })
    