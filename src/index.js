var XLSX = require("xlsx")

const ExcelAJSON = () =>{
    const excel = XLSX.readFile(
        "/home/manana/Escritorio/Consulta_node/src/datos.xlsx"
        );
        var nombrehojas = excel.SheetNames;
        let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombrehojas[0]])
        console.log(datos)

        const jDatos = [];
        for(let i=0;i<datos.length;i++){
            const dato = datos[i]
            jDatos.push({
                ...dato,
                Fecha: new Date((dato.Fecha - (25567 + 2)) * 86400 * 1000) 
            });
        }
        console.log(jDatos)
};
ExcelAJSON()