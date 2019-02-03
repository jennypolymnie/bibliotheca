import React from 'react';
import './ListLab.css';
import PropTypes from 'prop-types';



const ListLab = ({labName, directorName, email, website, onClick}) => (
  
    
    <div className="ListLabo">


            <div className = "Address" onClick={() => onClick(ListLab)}>
                <p>Nom du laboratoire: {labName}</p>
                <p>Nom du responsable: {directorName} </p>
                <p>Email: {email}</p>
                <p>Site web du laboratoire: {website}</p>
                
            </div>

</div>
)

ListLab.PropTypes = {
    labName: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    webSite: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default ListLab