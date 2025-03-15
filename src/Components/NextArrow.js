function NextArrow({className,style, onClick}) {
    return (
      <div onClick={onClick} 
           style={{...style, right:"-3px"  ,zIndex:'10'}}
           className={className} >
          <div className="d-flex arrow border text-light rounded-circle
           justify-content-center align-items-center" style={{height:"40px",width:'40px'}}>
            <i className="bi bi-chevron-right fs-4 "></i> 
          </div>
      </div>
      );
}

export default NextArrow;