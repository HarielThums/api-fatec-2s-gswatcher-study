// #############################################################################
//                                     HEADER
// #############################################################################
// Produced by Cluster8
// Objective: this function verify, create and populate the database
const db = require('../config/database')

    async function count_completas(variable) {
        query = `select count (*) from tbl_task_detalhes 
                    inner join tbl_task on tbl_task.task_detalhes = tbl_task_detalhes.task_detalhes_id
                    inner join tbl_projeto on tbl_task.projeto_id = tbl_projeto.projeto_id
                    where tbl_projeto.projeto_nome = '`+variable+`' and 
                    tbl_task_detalhes.termino = true;`
        let { rows } = await db.query(query)
        let resp = rows[0].count;
        return resp;
    }



module.exports = count_completas;