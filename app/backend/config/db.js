import mongoose from 'mongoose'


// mongodb://localhost:52017/hadiraza

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/RMS`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
