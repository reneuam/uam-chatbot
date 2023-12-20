import openai from './openAI'
import {
  Run,
  RunCreateParams,
} from 'openai/resources/beta/threads/runs/runs.mjs'
import {
  Thread,
  ThreadCreateAndRunParams,
  ThreadCreateParams,
} from 'openai/resources/beta/threads/threads.mjs'

export const create = async (
  threadCreateParams: ThreadCreateParams
): Promise<Thread> => {
  try {
    return await openai.beta.threads.create(threadCreateParams)
  } catch (error) {
    throw error
  }
}

export const run = async (
  threadId: string,
  runCreateParams: RunCreateParams
): Promise<Run> => {
  try {
    const assistantId = process.env.OPENAI_ASSISTANT_ID

    if (!assistantId) {
      throw new Error('No assistant id found')
    }

    runCreateParams.assistant_id = assistantId

    return await openai.beta.threads.runs.create(threadId, runCreateParams)
  } catch (error) {
    throw error
  }
}

export const createAndRun = async (
  threadCreateAndRunParams: ThreadCreateAndRunParams
): Promise<any> => {
  try {
    const assistantId = process.env.OPENAI_ASSISTANT_ID

    if (!assistantId) {
      throw new Error('No assistant id found')
    }

    return await openai.beta.threads.createAndRun({
      assistant_id: assistantId,
      thread: threadCreateAndRunParams,
    })
  } catch (error) {
    throw error
  }
}
