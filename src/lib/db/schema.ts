import { sql } from 'drizzle-orm'
import { pgTable,varchar, boolean, timestamp,text, jsonb, integer } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm/relations'


export const users = pgTable(
    'users', {
        id: varchar('id', {length: 255}).primaryKey(),
        name: varchar('name',{length: 255}).notNull(),
        email: varchar('email',{length: 255}).notNull().unique(),
        emailVerified: boolean('email_verified').default(false),
        createdAt : timestamp('created_at').defaultNow().notNull(),
        updatedAt : timestamp('updated_at').defaultNow().notNull(),
        referralCode: text('referral_code').notNull().default(sql`gen_random_uuid()::text`),
        referralPoints: integer('referral_points').default(0),
        discount: integer('discount').default(0),
        engagementPoints: integer('engagement_points').default(0)

    }
)


export const sessions = pgTable(
    'sessions', {        
        id: varchar('id', {length: 255}).primaryKey(),
        userId: varchar('user_id' , { length: 255}).references(()=> users.id).notNull(),
        token: varchar('token', {length: 255} ),
        expiresAt: timestamp('expires_at').notNull(),
        ipAddress:  varchar('ip_address', {length: 255} ),
        userAgent: text('user_agent'),
        createdAt : timestamp('created_at').defaultNow().notNull(),
        updatedAt : timestamp('updated_at').defaultNow().notNull()


    }
)

export const accounts = pgTable('accounts',{
    id: varchar('id', {length: 255}).primaryKey(),
    userId: varchar('user_id' , { length: 255}).references(()=> users.id).notNull(),
    accountId: varchar('account_id', {length: 255}).notNull(),
    providerId:  varchar('provider_id', {length: 255}).notNull(),
    password: text('password'),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull()


})


export const vendors = pgTable('vendors',{
    id: varchar('id', { length: 255}).primaryKey(),
    name: varchar('name', { length: 255}).notNull(),
    image: varchar('image_url',{length: 255}).notNull(),
    location: varchar('location',{ length: 255}).notNull(),
    isActive: boolean('is_active').default(true),
    createdAt : timestamp('created_at').defaultNow().notNull(),

})



export const products = pgTable('products',{
    id: varchar('id', { length: 255}).primaryKey(),
    name: varchar('name', { length: 255}).notNull(),
    description: varchar('description', { length: 255}).notNull(),
    image: varchar('image',{length: 255}).notNull(),
    slug: varchar('slug', { length: 255}).notNull().unique(),
    content: text('content').notNull(),
    price: varchar('price', {length: 255}).notNull(),
    vendorId: varchar('vendor_id' , { length: 255}).references(()=> vendors.id).notNull(),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull()


})

export const orders = pgTable('orders',{
    id: varchar('id', { length: 255}).primaryKey(),
    userId: varchar('user_id', {length: 255}).notNull().references(()=> users.id).notNull(),
    orderNumber: varchar('order_number', {length: 255}).notNull(),
    totalAmount: varchar('total_amount', {length: 255}).notNull(),
    status: varchar('status', {length: 255}).notNull(),
    vendorId: varchar('vendor_id', {length: 255}).notNull().references(()=> vendors.id).notNull(),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull()

})

export const orderItems = pgTable('order_items',{
    id: varchar('id', { length: 255}).primaryKey(),
    orderId: varchar('order_id', {length: 255}).notNull().references(()=> orders.id).notNull(),
    productId: varchar('product_id', {length: 255}).notNull().references(()=> products.id).notNull(),
    quantity: varchar('quantity', {length: 255}).notNull(),
    price: varchar('price', {length: 255}).notNull(),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull()
})



export const games = pgTable('games',{
    id: varchar('id', { length: 255}).primaryKey(),
    productId: varchar('product_id', {length: 255}).notNull().references(()=> products.id).notNull(),
    slug: varchar('slug', { length: 255}).notNull().unique(),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull()
})



export const ongoing_auction = pgTable('ongoing_auction',{
    id: varchar('id', { length:  255}).primaryKey(),
    gameId: varchar('game_id', {length: 255}).references(()=> games.id).notNull(),
    slug: varchar('slug', { length: 255}).notNull().unique(),
    duration: varchar('duration', { length: 255}).notNull(),
    auctionPrice: varchar('auctionPrice', {length: 255}).notNull(),
    startTime: varchar('start_time', {length: 255}).notNull(),
    endTime: varchar('end_time', {length: 255}).notNull(),
    price: varchar('price', {length: 255}).notNull(),
    totalUsers: varchar('total_users', {length: 255}).notNull(),
    vendorId: varchar('vendor_id' , { length: 255}).references(()=> vendors.id).notNull(),
    registeredBidders: jsonb("registeredBidders").$type<string[]>().default([]),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull(),
    productId: varchar('product_id', {length: 255}).notNull().references(()=> products.id).notNull(),
})


export const auction = pgTable('auction',{
    id: varchar('id', { length: 255}).primaryKey(),
    slug: varchar('slug', { length: 255}).notNull().unique(),
    winnerId: varchar('winner_id' , { length: 255}).references(()=> users.id).notNull(),
    auctionId: varchar('auction_id', {length: 255}).notNull().references(()=> ongoing_auction.id).notNull(),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull()
})


export const round_results = pgTable('round_results',{
    id: varchar('id',{length: 255}).primaryKey(),
    slug: varchar('slug', { length: 255}).notNull().unique(),
    winnerId: varchar('winner_id' , { length: 255}).references(()=> users.id).notNull(),
    round: integer('round').notNull(),
    points: integer('points').notNull(),
    auctionId: varchar('auction_id').notNull().references(()=>ongoing_auction.id).notNull(),
    createdAt : timestamp('created_at').defaultNow().notNull(),
    updatedAt : timestamp('updated_at').defaultNow().notNull()

}) //TODO: add round rsults


//Each order belongs to one user// many to one from orders perspective

export const orderRelations = relations(orders, ({one})=>({
    user: one(users,{
        fields: [orders.userId],
        references: [users.id]
    })
}))


//One user has many orders// one to many from users perspective

 export const usersRelations = relations(users, ({many})=>({
    orders: many(orders)
}))

//One auction has many rounds// one to many

export const auctionRelations = relations(ongoing_auction, ({many})=>({
    round_results: many(round_results)
}))



export const ordersRelations = relations(orders, ({one})=>({
    author: one(users,{
        fields: [orders.userId],
        references: [users.id]
    })
}))


export const accountsRelations = relations(accounts, ({one})=>({
    user: one(users, {
        fields: [accounts.userId],
        references: [users.id]
    })
}))

export const sessionsRelations = relations(sessions, ({one})=>({
    user: one(users, {
        fields: [sessions.userId],
        references: [users.id]
    })
}))



export const schema ={
    users,
    accounts,ongoing_auction,
    orders,orderItems,auction,
    sessions, round_results,games,products,vendors
} 