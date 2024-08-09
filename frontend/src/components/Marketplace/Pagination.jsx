

const  Pagination = ({totalProducts, productsPerPage, setCurrentPage, currentPage}) => {
    console.log('pagination')
    let pages = [];
    for(let i = 1 ; i <= Math.ceil(totalProducts/productsPerPage) ; i++){
        console.log(i)
        console.log(totalProducts)
      pages.push(i);
    }
  return (
    <div className = 'Pagination'>
        {pages.map((page,index)=>{
            return (
             <button
             key={index} 
             onClick = {()=>setCurrentPage(page)}
                className = {page === currentPage ? 'active': ''}>            
                {page}
                </button>
            );
        })}
    </div>
  );
}

export default Pagination