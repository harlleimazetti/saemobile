// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'br.com.compositorapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    }
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  }
});

app.on('pageInit', function (page) {
  console.log(page.name);
  $$('.playlist_item_more').on('click', function (e) {
    app.sheet.open('.playlist_more_options', true);
    e.stopPropagation();
  });
  $$('.playlist_item').on('click', function (e) {
    app.sheet.open('.playlist_player', true);
    var audio_player = document.getElementById("audio_player");
    audio_player.src = "http://www.noiseaddicts.com/samples_1w72b820/2540.mp3";
    audio_player.play();
  });
  $$('.playlist_item_2').on('click', function (e) {
    app.sheet.open('.playlist_player', true);
    var audio_player = document.getElementById("audio_player");
    audio_player.src = "http://www.noiseaddicts.com/samples_1w72b820/4170.mp3";
    audio_player.play();
  });
  var calendarDateFormat = app.calendar.create({
    inputEl: '#nascimento',
    dateFormat: 'dd/mm/yyyy',
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto' , 'Setembro' , 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  });
});
