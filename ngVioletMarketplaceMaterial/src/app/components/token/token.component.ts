import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', UI.displayStocks);
    document.getElementById('hello')!.addEventListener('submit', (e) => {
      e.preventDefault();
      const symbol = (<HTMLInputElement>(
        document.querySelector('#symbol')
      )).value.toUpperCase();
      const quantity = (<HTMLInputElement>document.querySelector('#quantity'))
        .value;
      if (!symbol || !quantity) {
        alert('Please fill in both fields');
        return;
      }
      const stock = new Stock(symbol, parseInt(quantity, 10));
      UI.addStockToTable(stock);
      UI.clearFields();
    });
  }
}

class Stock {
  symbol = '';
  quantity = 0;
  constructor(symbol: string, quantity: number) {
    this.symbol = symbol;
    this.quantity = quantity;
  }
}

class UI {
  static displayStocks() {
    const storedStocks = [
      // Placeholder stocks for demonstration purposes
      new Stock('AAPL', 10),
      new Stock('GOOGL', 5),
    ];

    storedStocks.forEach((stock) => UI.addStockToTable(stock));
  }

  static addStockToTable(stock: Stock) {
    const table = document.querySelector('tbody');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${stock.symbol}</td>
      <td>${stock.quantity}</td>
      <td>Fetching...</td>
      <td>Fetching...</td>
    `;

    table!.appendChild(tr);

    // Fetch stock data and update the table
    UI.fetchStockData(stock.symbol)
      .then((data) => {
        tr.querySelector('td:nth-child(3)')!.textContent = '' + data.price;
        tr.querySelector('td:nth-child(4)')!.textContent = (
          data.price * stock.quantity
        ).toFixed(2);
      })
      .catch((error) => {
        tr.querySelector('td:nth-child(3)')!.textContent = 'Error';
        tr.querySelector('td:nth-child(4)')!.textContent = 'Error';
      });
  }

  static async fetchStockData(symbol: any) {
    // Replace `API_KEY` with your own API key from a stock data provider (e.g., Alpha Vantage, IEX Cloud, etc.)
    const API_KEY = 'your_api_key';
    const url = `https://api.example.com/stock/${symbol}?apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    // Replace `data.price` with the correct price field from the API response
    return {
      symbol: data.symbol,
      price: parseFloat(data.price),
    };
  }

  static clearFields() {
    (<HTMLInputElement>document.querySelector('#symbol')).value = '';
    (<HTMLInputElement>document.querySelector('#quantity')).value = '';
  }
}
