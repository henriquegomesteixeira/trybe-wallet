import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import '../styles/Wallet.css';
import '../styles/Table.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-main">
        <div className="walletForm-e-Header">
          <Header />
          <WalletForm />
        </div>
        <div className="table-main">
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;
