export default function getTotalPages(totalRecords, totalPerPage){
    return Math.ceil(totalRecords / totalPerPage);
}