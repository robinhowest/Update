    import React from 'react';
    import { useLocation } from 'react-router-dom';
    import { Header } from '../Header';
    import './styles.css';

    export const History = () => { 
      const location = useLocation();
      const { cartTotal, purchasedItems, purchaseTime } = location.state || { cartTotal: 0, purchasedItems: [], purchaseTime: null};

      const cartTotalFornated = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(cartTotal);

      if (!purchasedItems) {
        // Trate o caso em que purchasedItems é undefined ou null
        return <div>Nenhum item comprado.</div>;
      }
      return (        
        <div className="history-up" >
          <Header/>
          <h1>Compra Concluída</h1>
          <p>Data da Compra: {purchaseTime}</p>

          <h2>Itens Comprados:</h2>
          {purchasedItems.map((item) => (
            <div className="image-history" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
          <p className="valor-compra">Valor da Compra: 
            <span className="valor-formatado" >{cartTotalFornated}</span>
          </p>
        </div>
      );
    }