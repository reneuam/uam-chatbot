import { Cookie } from '@/app/interfaces/cookie'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function GET(request: NextRequest) {
  try {
    const cookies = request.cookies as Cookie

    if (!cookies.thread) {
      return new NextResponse('Thread not found', { status: 404 })
    }

    const threadId = cookies.thread
    const runId = request.nextUrl.pathname.split('/')[6]

    const data = await openai.beta.threads.runs.retrieve(threadId, runId)

    return NextResponse.json(data)
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
