const API_BASE = `${import.meta.env.API_BASE_URL}api`;

interface OrderData {
  userId: string;
  customerEmail: string;
  items: {
    id: string;
    name: string;
    image?: string;
    price: number;
    quantity: number;
    variant?: string;
    isUpsell?: boolean;
    upsellDiscount?: number;
    originalPrice?: number;
  }[];
  subtotal: number;
  total: number;
  shippingCost: number;
  discountAmount?: number;
  deliveryMethod?: string;
  paymentMethod?: string;
  shippingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    apartment?: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
  };
  customerName?: {
    firstName: string;
    lastName: string;
  };
  estimatedDelivery?: string;
  trackingNumber?: string;
  carrier?: string;
  transactionId?: string;
  coupons?: string[];
  notes?: string;
}

interface TimelineEntry {
  status:
    | "order_placed"
    | "order_confirmed"
    | "processing"
    | "shipped"
    | "in_transit"
    | "out_for_delivery"
    | "delivered"
    | "cancelled"
    | "returned"
    | "refunded";
  title: string;
  description?: string;
  timestamp: string;
  location?: string;
}

export const orderService = {
  async fetchUserOrders(userId: string) {
    try {
      const response = await fetch(`${API_BASE}/orders?userId=${userId}`);
      const data = await response.json();
      return data.success ? data.orders : [];
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  },

  async createOrder(orderData: OrderData) {
    try {
      const response = await fetch(`${API_BASE}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      return data.success ? data.order : null;
    } catch (error) {
      console.error("Error creating order:", error);
      return null;
    }
  },

  async trackOrder(query: string) {
    try {
      const response = await fetch(
        `${API_BASE}/orders/track?query=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      return data.success ? data.order : null;
    } catch (error) {
      console.error("Error tracking order:", error);
      return null;
    }
  },

  async updateOrderStatus(
    orderId: string,
    status: string,
    timelineEntry?: TimelineEntry
  ) {
    try {
      const response = await fetch(`${API_BASE}/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, timelineEntry }),
      });
      const data = await response.json();
      return data.success ? data.order : null;
    } catch (error) {
      console.error("Error updating order status:", error);
      return null;
    }
  },
};
