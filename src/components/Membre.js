import React, {Fragment} from 'react'




const Membre = ({nom, age, children, cacherNom, handleChange}) => {
    return(
        <Fragment>

            <h2 style={{
                backgroundColor: age > 25 ? '#AAB5BB' : 'violet',
                color: age > 25 ? 'white' : '#232953', 
                fontSize:'medium',}}>Membres de ma famille : {nom.toUpperCase()} : {age}
            </h2>
            
            <input style={{ fontSize: 'small'}} value={nom} onChange={handleChange} type='text' />
            
            
            <button onClick={cacherNom}>Cacher le Nom</button>
            {children ? <p>{children}</p> : <Fragment/>}
            
        </Fragment>
    )
}

export default Membre