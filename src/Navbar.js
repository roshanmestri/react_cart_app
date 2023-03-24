import React from 'react';
import './index.css';

const Navbar = (props) => {
        
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__340.png" />
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
}


const styles = {
    cartIcon: {
      height: 45,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop:"10px"
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'pink',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 8,
      bottom: 30
    }
  };
  

export default Navbar