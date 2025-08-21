import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'customerName', 'totalAmount', 'status', 'createdAt'],
    listSearchableFields: ['orderNumber', 'customerEmail', 'customerName'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'customerEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'customerName',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
        },
      ],
    },
    {
      name: 'shippingAddress',
      type: 'textarea',
      required: true,
      admin: {
        placeholder: 'Enter complete shipping address...',
        rows: 4,
      },
    },
    {
      name: 'totalAmount',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Total order amount in INR',
      },
    },
    {
      name: 'paymentMethod',
      type: 'select',
      required: true,
      options: [
        { label: 'Card', value: 'card' },
        { label: 'UPI', value: 'upi' },
        { label: 'Cash on Delivery', value: 'cod' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        { label: '🟡 Pending', value: 'pending' },
        { label: '🔵 Processing', value: 'processing' },
        { label: '🚚 Shipped', value: 'shipped' },
        { label: '✅ Delivered', value: 'delivered' },
        { label: '❌ Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'orderDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        placeholder: 'Add internal notes about this order...',
      },
    },
  ],
}