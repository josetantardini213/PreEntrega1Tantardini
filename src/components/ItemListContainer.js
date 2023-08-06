import React from 'react';

function ItemListContainer(props) {
  return (
    <div style={{padding: '20px', backgroundColor: '#f7f7f7', marginTop:"20px", display:"flex", margin:'auto', justifyContent:"center"}}>
      {props.greeting}
    </div>
  );
}

export default ItemListContainer;