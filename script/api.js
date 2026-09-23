const api = {
    async bucarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        } 
        catch (error) {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        } 
        catch (error) {
            alert('Erro ao salvar pensamento');  
            throw error;
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
            return await response.json()
        } 
        catch (error) {
            alert('Erro ao buscar pensamento por id'); 
            throw error;
        }
    },

    async editarPensamentos(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        } 
        catch (error) {
            alert('Erro ao editar pensamento');  
            throw error;
        }
    }
}

export default api;