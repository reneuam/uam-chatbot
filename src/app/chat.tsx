'use client'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  ConversationHeader,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';

export default function Chat() {
  const [messageInputValue, setMessageInputValue] = useState('');

  return (
    <div className="fixed w-[20rem] h-[35rem] right-0 bottom-0">
      <MainContainer responsive>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src="/captain-scope.jpg" name="Captain Scope" />
            <ConversationHeader.Content
              userName="Captain Scope"
              info="HR assistant"
            />
          </ConversationHeader>
          <MessageList
            typingIndicator={
              <TypingIndicator content='Captain Scope is typing' />
            }
          >
            <Message
              model={{
                message: 'Hello my name is Captain Scope',
                sentTime: '15 mins ago',
                sender: 'Captain Scope',
                direction: 'incoming',
                position: 'single',
              }}
            >
              <Avatar src="/captain-scope.jpg" name="Captain Scope" />
            </Message>
            <Message
              model={{
                message: 'Hello Captain Scope',
                sentTime: '15 mins ago',
                sender: 'User',
                direction: 'outgoing',
                position: 'single',
              }}
            />
            <Message
              model={{
                message: 'I neeed help with my vacation days',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'outgoing',
                position: 'single',
              }}
            />
            <Message
              model={{
                message:
                  'To take vacation go to Unplugged and click on the vacation tab',
                sentTime: '15 mins ago',
                sender: 'Captain Scope',
                direction: 'incoming',
                position: 'single',
              }}
            >
              <Avatar src="/captain-scope.jpg" name="Captain Scope" />
            </Message>
            <Message
              model={{
                message: 'And what about sick days?',
                sentTime: '15 mins ago',
                sender: 'User',
                direction: 'outgoing',
                position: 'first',
              }}
            />
            <Message
              model={{
                message:
                  'You can find the sick days tab in the same place as the vacation tab',
                sentTime: '15 mins ago',
                sender: 'Captain Scope',
                direction: 'incoming',
                position: 'first',
              }}
            >
              <Avatar src='/captain-scope.jpg' name='Captain Scope' />
            </Message>
            <Message
              model={{
                message: 'And what about extraordinary days?',
                sentTime: '15 mins ago',
                sender: 'User',
                direction: 'outgoing',
                position: 'first',
              }}
            />
            <Message
              model={{
                message:
                  'You can find the extraordinary days tab in the same place as the vacation tab',
                sentTime: '15 mins ago',
                sender: 'Captain Scope',
                direction: 'incoming',
                position: 'first',
              }}
            >
              <Avatar src="/captain-scope.jpg" name="Captain Scope" />
            </Message>
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={() => setMessageInputValue("")}
            sendButton={true}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  )
}
