import React, {Component} from 'react';
import logo from '../images/logo.png'

class RechercheResult extends Component{

    render(){
        return (
             <main role="main" className="col-sm-8 container"> 
                 <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm"> 
                     <img className="mr-3" src={logo} alt="kkk" width='100' height='40'/> 
                     <div className="lh-100"> 
                         <h6 className="mb-0 lh-100"> Resultats de la cherche </h6> 
                         <small className='text-danger'> il faut être inscrit pour plus d'information  </small>                      </div> 
                 </div> 

                 <div className="my-3 p-3 bg-white rounded shadow-sm"> 
                     <h6 className="border-bottom border-gray pb-2 mb-0"> compétitions </h6> 
                     <div className="media text-muted pt-3"> 
                     <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">  <title> Placeholder </title>  <rect width="100%" height="100%" fill="#007bff">  </rect>  <text x="50%" y="50%" fill="#007bff" dy=".3em"> 32x32 </text>  </svg> 
                     <p clasclassNames="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> 
                         <strong className="d-block text-gray-dark"> @titre </strong> 
                        ici une partie du contenu de la compétition qui correspond à la recherche pour donner plus de detais sur la chose recherché
                     </p> 
                  </div> 
                 <div className="media text-muted pt-3"> 
                 <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">  <title> Placeholder </title>  <rect width="100%" height="100%" fill="#e83e8c">  </rect>  <text x="50%" y="50%" fill="#e83e8c" dy=".3em"> 32x32 </text>  </svg> 
                 <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> 
                     <strong className="d-block text-gray-dark"> @titre </strong> 
                    ici une partie du contenu de la compétition qui correspond à la recherche pour donner plus de detais sur la chose recherché
                 </p> 
                 </div> 
                 <div className="media text-muted pt-3"> 
                 <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">  <title> Placeholder </title>  <rect width="100%" height="100%" fill="#6f42c1">  </rect>  <text x="50%" y="50%" fill="#6f42c1" dy=".3em"> 32x32 </text>  </svg> 
                 <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> 
                     <strong className="d-block text-gray-dark"> @titre </strong> 
                    ici une partie du contenu de la compétition qui correspond à la recherche pour donner plus de detais sur la chose recherché
                 </p> 
                 </div> 
                 <small className="d-block text-right mt-3"> 
                 <a href="#"> tout voir </a> 
                 </small> 
             </div> 

             <div className="my-3 p-3 bg-white rounded shadow-sm"> 
                 <h6 className="border-bottom border-gray pb-2 mb-0"> Suggestions </h6> 
                 <div className="media text-muted pt-3"> 
                 <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">  <title> Placeholder </title>  <rect width="100%" height="100%" fill="#007bff">  </rect>  <text x="50%" y="50%" fill="#007bff" dy=".3em"> 32x32 </text>  </svg> 
                 <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> 
                     <div className="d-flex justify-content-between align-items-center w-100"> 
                     <strong className="text-gray-dark"> cours/autres </strong> 
                     <a href="#"> afficher </a> 
                     </div> 
                     <span className="d-block"> @titre </span> 
                 </div> 
                 </div> 
                 <div className="media text-muted pt-3"> 
                 <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">  <title> Placeholder </title>  <rect width="100%" height="100%" fill="#007bff">  </rect>  <text x="50%" y="50%" fill="#007bff" dy=".3em"> 32x32 </text>  </svg> 
                 <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> 
                     <div className="d-flex justify-content-between align-items-center w-100"> 
                     <strong className="text-gray-dark"> cours/autres </strong> 
                     <a href="#"> afficher </a> 
                     </div> 
                     <span className="d-block"> @titre </span> 
                 </div> 
                 </div> 
                 <div className="media text-muted pt-3"> 
                 <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">  <title> Placeholder </title>  <rect width="100%" height="100%" fill="#007bff">  </rect>  <text x="50%" y="50%" fill="#007bff" dy=".3em"> 32x32 </text>  </svg> 
                 <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> 
                     <div className="d-flex justify-content-between align-items-center w-100"> 
                     <strong className="text-gray-dark"> cours/autres </strong> 
                     <a href="#"> afficher </a> 
                     </div> 
                     <span className="d-block"> @titre </span> 
                 </div> 
                 </div> 
                 <small className="d-block text-right mt-3"> 
                 <a href="#"> voir plus </a> 
                 </small> 
             </div> 
             </main> 
        );
    }

}

export default RechercheResult;