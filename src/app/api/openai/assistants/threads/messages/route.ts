import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { MessageCreateParams, MessageListParams } from 'openai/resources/beta/threads/messages/messages.mjs'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function GET(req: NextRequest) {
  try {
    const threadId = 'thread_jHsoinWLDrkIrOltbgGjMT07'

    if (!threadId) {
      return new NextResponse('Thread not found', { status: 404 })
    }

    const data = await openai.beta.threads.messages.list(threadId)

    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const threadId = 'thread_jHsoinWLDrkIrOltbgGjMT07'
    const body = await req.json()

    if (!threadId) {
      return new NextResponse('Thread not found', { status: 404 })
    }

    const messageCreateParams = {
      role: 'user',
      content: body.message,
    } as MessageCreateParams

    const data = await openai.beta.threads.messages.create(
      threadId,
      messageCreateParams
    )

    return NextResponse.json(data)
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
