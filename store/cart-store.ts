import { create } from "zustand"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartStore = {
  cart: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  clearCart: () => void
}

// Helper to load from localStorage safely
const loadCart = (): CartItem[] => {
  if (typeof window === "undefined") return [] // Next.js SSR safe
  const saved = localStorage.getItem("cart")
  return saved ? JSON.parse(saved) : []
}

// Zustand store with persistence
export const useCartStore = create<CartStore>((set, get) => ({
  cart: loadCart(),

  addItem: (item) => {
    const { cart } = get()
    const existing = cart.find((c) => c.id === item.id)

    let newCart
    if (existing) {
      newCart = cart.map((c) =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      )
    } else {
      newCart = [...cart, { ...item, quantity: 1 }]
    }

    set({ cart: newCart })
    localStorage.setItem("cart", JSON.stringify(newCart))
  },

  removeItem: (id) => {
    const { cart } = get()
    const newCart = cart.filter((c) => c.id !== id)
    set({ cart: newCart })
    localStorage.setItem("cart", JSON.stringify(newCart))
  },

  increaseQuantity: (id) => {
    const { cart } = get()
    const newCart = cart.map((c) =>
      c.id === id ? { ...c, quantity: c.quantity + 1 } : c
    )
    set({ cart: newCart })
    localStorage.setItem("cart", JSON.stringify(newCart))
  },

  decreaseQuantity: (id) => {
    const { cart } = get()
    const newCart = cart
      .map((c) =>
        c.id === id ? { ...c, quantity: c.quantity - 1 } : c
      )
      .filter((c) => c.quantity > 0)

    set({ cart: newCart })
    localStorage.setItem("cart", JSON.stringify(newCart))
  },

  clearCart: () => {
    set({ cart: [] })
    localStorage.removeItem("cart")
  },
}))
