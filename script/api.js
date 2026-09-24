const URL_BASE = 'http://localhost:3000'

const api = {
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