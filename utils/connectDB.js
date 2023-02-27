import mongoose from 'mongoose'

const connectMongo = async () => mongoose.connect('mongodb+srv://wholesaleliquidationauction:KVoriF87obk1xs6w@cluster0.hj9qwfy.mongodb.net/?retryWrites=true&w=majority');

export default connectMongo