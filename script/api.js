const URL_BASE = 'http://localhost:3000'

const api = {

    // USING THE METHOD GET
    async bucarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`)
            return await response.data
        } 
        catch (error) {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    //USING THE METHOD POST
    async salvarPensamentos(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento )
            return await response.data
        } 
        catch (error) {
            alert('Erro ao salvar pensamento');  
            throw error;
        }
    },

    //USING THE METHOD GET AGAIN
    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
            return await response.data
        } 
        catch (error) {
            alert('Erro ao buscar pensamento por id'); 
            throw error;
        }
    },

    //USING THE METHOD PUT
    async editarPensamentos(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
            return await response.data
        } 
        catch (error) {
            alert('Erro ao editar pensamento');  
            throw error;
        }
    },

    //USING THE METHOD DELETE
    async excluirPensamentos(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
        } 
        catch (error) {
            alert('Erro ao excluir pensamento');  
            throw error;
        }
    }
}

export default api;