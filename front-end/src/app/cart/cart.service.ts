import { Injectable } from '@angular/core';
import {ShoppingCartItem} from "./shopping-cart-item";
import {TShirtCartItem} from "./t-shirt-cart-item";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartSubject = new BehaviorSubject(this.getShoppingCartItems());
  constructor() { }

  getShoppingCartItems(): ShoppingCartItem[] {
    try {
      const cartItems = localStorage.getItem('shoppingCartItems')
      const items = JSON.parse(<string>cartItems) as ShoppingCartItem[];
      if (items === null) {
        return []
      }
      return items
    }
     catch (e) {
      // if there are no current product
      return []
    }
  }

  addProductToShoppingCart(item: ShoppingCartItem | TShirtCartItem): boolean {
    try {
      // add to existing products
      let currentShoppingItems = this.getShoppingCartItems();

      // if same product we want to add to the existing amount
      const existingProductIndex = currentShoppingItems.findIndex(
        (cartItem) => cartItem.product.id == item.product.id)

      if (existingProductIndex !== -1) {
        currentShoppingItems[existingProductIndex].amount += item.amount
      } else {
        currentShoppingItems.push(item)
      }
      localStorage.setItem('shoppingCartItems', JSON.stringify(currentShoppingItems));
      this.cartSubject.next(currentShoppingItems)
      return true
    } catch (e) {
      return false
    }
  }

  setCartItems(items: ShoppingCartItem[]) {
    localStorage.setItem('shoppingCartItems', JSON.stringify(items));
  }

  clearShoppingCart() {
    localStorage.removeItem('shoppingCartItems')
  }
}

