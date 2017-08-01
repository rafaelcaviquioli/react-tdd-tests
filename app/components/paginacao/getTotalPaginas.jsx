export default function getTotalPaginas(totalRegistros, quantidadePorPagina){
    return Math.ceil(totalRegistros / quantidadePorPagina);
}