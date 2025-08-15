import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    const productNames = [
      'Whey Protein Isolate',
      'BCAA Powder', 
      'Creatine Monohydrate',
      'Pre-Workout Booster',
      'Mass Gainer',
      'Glutamine Powder',
      'Fish Oil Capsules',
      'Multivitamin Tablets'
    ];

    const orders = Array.from({ length: 50 }, (_, i) => ({
      id: (i + 1).toString(),
      orderNumber: `ORD-2024-${String(i + 1).padStart(3, '0')}`,
      userId,
      customerEmail: `customer${i + 1}@example.com`,
      customerName: `Customer ${i + 1}`,
      status: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'][Math.floor(Math.random() * 5)],
      items: [{
        id: (i + 1).toString(),
        name: productNames[Math.floor(Math.random() * productNames.length)],
        price: Math.floor(Math.random() * 3000) + 1000,
        quantity: Math.floor(Math.random() * 3) + 1,
        variant: ['1kg', '2kg', '5kg'][Math.floor(Math.random() * 3)]
      }],
      total: Math.floor(Math.random() * 5000) + 1500,
      paymentMethod: ['upi', 'credit_card', 'debit_card', 'cod', 'net_banking'][Math.floor(Math.random() * 5)],
      paymentStatus: ['paid', 'pending', 'failed'][Math.floor(Math.random() * 3)],
      trackingNumber: `TRK${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    }))

    return NextResponse.json({ success: true, orders })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const productNames = [
      'Whey Protein Isolate',
      'BCAA Powder', 
      'Creatine Monohydrate',
      'Pre-Workout Booster',
      'Mass Gainer'
    ];

    const order = {
      id: Date.now().toString(),
      orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
      ...data,
      items: data.items?.map((item: any) => ({
        ...item,
        name: item.name || productNames[Math.floor(Math.random() * productNames.length)]
      })) || [{
        id: Date.now().toString(),
        name: productNames[Math.floor(Math.random() * productNames.length)],
        price: Math.floor(Math.random() * 2000) + 1000,
        quantity: 1
      }],
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({ success: true, order })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}