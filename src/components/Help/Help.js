import React from 'react';

const Help = () => {
    const ReviewItem ={
       
        textAlign:"center",
        borderBottom:"1px solid black",
        background:"green",
          marginBottom:"5px",
          paddingBottom:"5px",
          marginLeft:"50px",
          marginRight:"50px",
    }
    return (
        <div style={ReviewItem}>
            <h1 className="bg-secondary">Hello Customer</h1>
            <p className="bg-light">call: <b>+8801743823908</b> </p>
            <p className="bg-info">email: <b>alamin1996ani@gmail.com</b></p>
            <p className="bg-primary">address: <b>KHULNA,BANGLADESH</b> </p>
        </div>
    );
};

export default Help;