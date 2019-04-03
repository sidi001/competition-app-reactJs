import React, {Component} from 'react';
import ProblemItem from './ProblemsItem';

 function CreateList(){
    var table=[];
    
        for(let i=0;i <3;i++){
            table.push( <ProblemItem position={i} key={i}/> );
        }
    return(
         <div> {table}  </div> 
    );
}

class ExemplesDeProblemes extends Component {
    render(){
        return(
             <div > 
                 <div className="card"> 
                   <div className="card-header"> 
                     <i className="fa fa-align-justify">  </i>  EXEMPLE 
                     <small> DE  PROBLEMES </small> 
                   </div> 
                   <div className="card-body"> 
                     <div id="exampleAccordion" data-children=".item"> 

                      {/* ProblemsItemIci */}
                      {CreateList()}
                     </div> 
                   </div> 
                 </div> 
             </div> 
            
        );
    }
}
export default ExemplesDeProblemes;