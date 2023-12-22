import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { ThreadCreateAndRunParams } from 'openai/resources/beta/threads/threads.mjs'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const assistantId = process.env.OPENAI_ASSISTANT_ID
    const body = await req.json()

    if (!assistantId) {
      return new NextResponse('Assistant not found', { status: 404 })
    }

    const threadCreateAndRunParams = {
      assistant_id: assistantId,
      thread: {
        messages: [
          {
            role: 'user',
            content: body.message,
          },
        ],
      },
    } as ThreadCreateAndRunParams

    const data = await openai.beta.threads.createAndRun(
      threadCreateAndRunParams
    )

    return NextResponse.json(data)
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
