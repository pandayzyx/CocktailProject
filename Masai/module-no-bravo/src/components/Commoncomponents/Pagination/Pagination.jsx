import React from "react";
import { v4 as uuidv4 } from "uuid";
let activeno = 1
export default function Pagination(props) {
    let { pages,click,prevNext } = props;
    if(activeno >=pages){
        activeno = pages
    }
    else if(activeno <=1){
        activeno = 1
    }
    
	
	let arr = [];
	for (var i = 1; i <= pages; i++) {
		arr.push(i);
	}
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<button  onClick = {()=>{
                        activeno--
                        prevNext(activeno)
                    }} className="page-link" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only">Previous</span>
					</button>
				</li>

				

				{arr.map((item) => (
					<li key={uuidv4()} className = {activeno === item?"page-item active":"page-item"}>
                        <button id = {item} onClick = {(e)=>{activeno = item
                            click(e)}} className="page-link">{item}</button>
					</li>
				))
				
				
				
				}

				<li className="page-item">
					<button   onClick = {()=> {activeno++;prevNext(activeno)}} className="page-link" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						<span className="sr-only">Next</span>
					</button>
				</li>
			</ul>
		</nav>
	);
}
