$(document).ready(function () {

    $('#slider').bxSlider({
        mode: 'fade',
        captions: true,
        controls: true
        // auto: true
    });

    // Carga dinámica de Posts
    if(window.location.pathname.includes("index")){
        var posts = [{
            title: "Prueba de título 1",
            date: "Publicado el día " + moment().format('dddd DD') + " de " + moment().format('MMMM') + " de " + moment().format('YYYY'),
            content: "Enim quia illo iure sit voluptatibus numquam perferendis quidem iste. Quod quae unde. Occaecati ullam recusandae. Exercitationem corrupti iste ipsam."
        },
        {
            title: "Prueba de título 2",
            date: "Publicado el día " + moment().format('dddd DD') + " de " + moment().format('MMMM') + " de " + moment().format('YYYY'),
            content: "Ad voluptate aperiam dolor. Quod est ut officiis. Laborum esse et perferendis."
        },
        {
            title: "Prueba de título 3",
            date: "Publicado el día " + moment().format('dddd DD') + " de " + moment().format('MMMM') + " de " + moment().format('YYYY'),
            content: "Qui consequatur voluptates dolore dolorem sint asperiores. Dolorem facilis odio. Est facere vitae ipsa et. Corrupti sit nobis placeat et. Quos laborum quidem. Eos eum ipsum et qui voluptas asperiores eius mollitia."
        },
        {
            title: "Prueba de título 4",
            date: "Publicado el día " + moment().format('dddd DD') + " de " + moment().format('MMMM') + " de " + moment().format('YYYY'),
            content: "Quisquam natus assumenda alias minima. Doloribus soluta tenetur earum repellat doloremque sed optio expedita. Nostrum magni explicabo sequi."
        },
        {
            title: "Prueba de título 5",
            date: "Publicado el día " + moment().format('dddd DD') + " de " + moment().format('MMMM') + " de " + moment().format('YYYY'),
            content: "Fugit voluptate nisi ut sapiente quibusdam. Optio culpa eius possimus autem. Et qui expedita neque ea consequatur quibusdam. Voluptatum sit maiores. Ex velit quo magnam provident. Enim impedit vero saepe ipsum sapiente nemo aliquid omnis."
        }
    ];

        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <p class="date">${item.date}</p>
                    <p class="text"> ${item.content}
                        <a href="#" type="button" class="readMore">Leer mas...</a>
                    </p>
                </article><!-- end article -->
            `;
            $('#posts').append(post);
        }); // Fin carga dinámica de posts
    };

    // Cambio de tema
    var theme = $('#theme');
    $('#to-green').click(function () {
        theme.attr('href', 'css/theme-green.css')
    });
    $('#to-red').click(function () {
        theme.attr('href', 'css/theme-red.css')
    });
    $('#to-blue').click(function () {
        theme.attr('href', 'css/theme-blue.css')
    }); // end cambio de tema


    //Ir arriba
    $('#up').click(function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }); // end Ir arriba


    // Login falso
    $('#login form').submit(function(){
        var name =$('#form_name').val();
        var email =$('#form_email').val();
        var password =$('#form_password').val();

        localStorage.setItem('form_name', name);
        localStorage.setItem('form_email', email);
        localStorage.setItem('form_password', password);
    });

    var form_name = localStorage.getItem('form_name');
    if(form_name != null && form_name != undefined){
        var about_parrafo = $('#about p');
        about_parrafo.html('<br><strong>Bienvenido ' + form_name + '</strong>');
        about_parrafo.append('<a href=""# type="button" class="readMore" id="logout"> Cerrar Sesion</a>');
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }; // end Login falso

    // carga del acordeon
    if(window.location.pathname.includes("about")){
        $('#accordion').accordion();
    };

    // carga del reloj
    if(window.location.pathname.includes("clock")){
        // console.log('Estamos en reloj');
        setInterval(() => {
            var clock = moment().format('hh:mm:ss');
            $('#clock').html(clock);
        }, 1000);

    }


    // carga del Form Validator
    if(window.location.pathname.includes("contact")){
        $('#fecha-nacimiento').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es'
        });
    }



}); // end $(document).ready()