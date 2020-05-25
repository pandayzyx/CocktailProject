import React from  "react"
export default function Card(props){
 let {image,label,instruction,text} = props

    return(
          
        <div className ="card mb-4" style= {{width: "18rem"}}>
             <div className="card-header">
                    {label}
                                </div>
        <img className ="card-img-top" src= {image} alt= "img"></img>
        <div className="card-body">
    <p className ={`card-text ${text}`}>{instruction}</p>
        </div>
        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
    See More
</button>


        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLongTitle">{label}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {instruction}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
    </div>
   </div>


   
</div>

      
    )
}