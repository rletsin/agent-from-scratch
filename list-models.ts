import 'dotenv/config'
import { openai } from './src/ai'

async function listModels() {
  try {
    const response = await openai.models.list()
    console.log(response.data.map((model: { id: any }) => model.id))
  } catch (error) {
    console.error('Error:', error)
  }
}

listModels()
