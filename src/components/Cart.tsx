"use client";

import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";
import { formatPrice } from "@/data/products";
import { useEffect } from "react";

export default function Cart() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, totalPrice } = useCart();

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  return (
    <>
      <div 
        className={`${styles.overlay} ${isCartOpen ? styles.open : ""}`} 
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className={`${styles.cartDrawer} ${isCartOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.itemsList}>
          {items.length === 0 ? (
            <p className={styles.emptyState}>Your cart is currently empty.</p>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${item.size}-${idx}`} className={styles.item}>
                <div className={styles.itemImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemDetails}>
                  <h4 className={styles.itemTitle}>{item.name}</h4>
                  <p className={styles.itemMeta}>
                    {item.size ? `Size: ${item.size} | ` : ""}Qty: {item.quantity}
                  </p>
                  <div className={styles.itemBottom}>
                    <span className={styles.itemPrice}>{formatPrice(item.price)}</span>
                    <button 
                      className={styles.removeBtn} 
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Subtotal</span>
              <span className={styles.totalPrice}>{formatPrice(totalPrice)}</span>
            </div>
            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
