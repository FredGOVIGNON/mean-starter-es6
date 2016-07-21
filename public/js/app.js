angular.module('app', ['ngRoute'])
        .service('repertoireService', repertoireService)
        .controller('mainController', mainController)
        .config(routes)
        ;


