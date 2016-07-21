class mainController {

    constructor(repertoireService) {
        this.repertoireService = repertoireService;
        this.load();
    }

    load() {
        this.repertoireService.getAll().then((res) => {
            this.repertoires = res.data;
        })
    }

    create() {
        this.repertoireService.create(this.repertoire).then(() => {
            this.repertoire = '';
            this.load()
        })
    }

    update(repertoire) {
        this.repertoireService.update(repertoire._id, repertoire).then(() => {
            this.load()
        })
    }

    delete(repertoire) {
        this.repertoireService.delete(repertoire._id).then(() => {
            this.load()
        })
    }

}

// function mainController($scope) {
//         $scope.nom = 'Nom';
//         $scope.telephone = 'Telephone';

// $scope.repertoire=[]
//     $scope.add = function(){
//         $scope.repertoire.push({
//             nom:$scope.nom, 
//             telephone:$scope.telephone
//         })
//     }

//     }

