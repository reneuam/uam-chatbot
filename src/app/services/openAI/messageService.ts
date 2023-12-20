import openai from './openAI'
import {
  MessageCreateParams,
  MessageListParams,
  ThreadMessage,
} from 'openai/resources/beta/threads/messages/messages.mjs'

export const create = async (
  threadId: string,
  messageCreateParams: MessageCreateParams
): Promise<ThreadMessage> => {
  try {
    return (await openai.beta.threads.messages.create(
      threadId,
      messageCreateParams
    )) as ThreadMessage
  } catch (error) {
    throw error
  }
}

export const getAll = async (
  threadId: string,
  messageListParams: MessageListParams
): Promise<ThreadMessage[]> => {
  try {
    const { data: messages } = await openai.beta.threads.messages.list(
      threadId,
      messageListParams
    )

    return messages as ThreadMessage[]
  } catch (error) {
    throw error
  }
}
