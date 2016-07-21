class repertoireService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/repertoires', data)
    }

    getAll() {
        return this.$http.get('/api/repertoires')
    }

    getOne(id) {
        return this.$http.get('/api/repertoires/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/repertoires/' + id, data)
    }

    delete(id) {
        return this.$http.delete('/api/repertoires' + id)
    }

}
