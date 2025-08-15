const API_BASE = 'http://localhost:3000/api'

export const orderService = {
  async fetchUserOrders(userId: string) {
    try {
      const response = await fetch(`${API_BASE}/orders?userId=${userId}`)
      const data = await response.json()
      return data.success ? data.orders : []
    } catch (error) {
      console.error('Error fetching orders:', error)
      return []
    }
  },

  async createOrder(orderData: any) {
    try {
      const response = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      })
      const data = await response.json()
      return data.success ? data.order : null
    } catch (error) {
      console.error('Error creating order:', error)
      return null
    }
  }
}