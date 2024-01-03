import { Cookie } from '@/app/interfaces/cookie'
import { Roles } from '@/app/utils/enums/roles'
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

    const cookies = req.cookies as Cookie
    if (cookies.thread) {
      return new NextResponse('There is an active thread', { status: 400 })
    }

    if (!assistantId) {
      return new NextResponse('Assistant not found', { status: 404 })
    }

    const threadCreateAndRunParams = {
      assistant_id: assistantId,
      thread: {
        messages: [body.message],
      },
    } as ThreadCreateAndRunParams

    const data = await openai.beta.threads.createAndRun(
      threadCreateAndRunParams
    )

    const response = NextResponse.json(data)
    response.cookies.set('thread', data.thread_id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      sameSite: 'strict',
      path: '/',
      expires: new Date(Date.now() + 30 * 60 * 1000),
    })

    return response
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
