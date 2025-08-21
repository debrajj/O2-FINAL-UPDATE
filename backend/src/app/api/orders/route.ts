import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '../../../payload.config'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()
    
    console.log('Creating order with data:', body)

    // Create a simple order first
    const orderData = {
      orderNumber: body.orderNumber || `ORD-${Date.now()}`,
      customerEmail: body.customerEmail || 'test@example.com',
      customerName: body.customerName || 'Test User',
      totalAmount: body.totalAmount || 0,
      status: 'pending'
    }
    
    // Add optional fields if they exist
    if (body.items && body.items.length > 0) {
      orderData.items = body.items
    }
    if (body.shippingAddress) {
      if (typeof body.shippingAddress === 'string') {
        orderData.shippingAddress = body.shippingAddress
      } else {
        orderData.shippingAddress = `${body.shippingAddress.firstName} ${body.shippingAddress.lastName}\n${body.shippingAddress.address}\n${body.shippingAddress.city}, ${body.shippingAddress.state} ${body.shippingAddress.zipCode}\n${body.shippingAddress.phone}`
      }
    }
    if (body.paymentMethod) {
      orderData.paymentMethod = body.paymentMethod
    }

    const order = await payload.create({
      collection: 'orders',
      data: orderData,
    })

    console.log('Order created successfully:', order)
    return NextResponse.json({ success: true, doc: order })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create order' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    
    const orders = await payload.find({
      collection: 'orders',
      sort: '-createdAt',
      limit: 100
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}