'use client';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  ConversationHeader,
  MessageSeparator,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  InputToolbox,
  AttachmentButton,
  SendButton,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';

export default function Chat() {
  const [messageInputValue, setMessageInputValue] = useState('')

  return (
    <div
      style={{
        width: '300px',
        height: '500px',
        position: 'fixed',
        right: '0',
        bottom: '0'
      }}
    >
      <MainContainer responsive>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar name='Zoe' />
            <ConversationHeader.Content
              userName='Zoe'
              info='Active 10 mins ago'
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
            typingIndicator={<TypingIndicator content='Zoe is typing' />}
          >
            <MessageSeparator content='Saturday, 30 November 2019' />

            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'single',
              }}
            >
              <Avatar name='Zoe' />
            </Message>

            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'single',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'first',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'normal',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'normal',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'last',
              }}
            >
              <Avatar name='Zoe' />
            </Message>

            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'first',
              }}
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'normal',
              }}
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'normal',
              }}
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Patrik',
                direction: 'outgoing',
                position: 'last',
              }}
            />

            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'first',
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'last',
              }}
            >
              <Avatar name='Zoe' />
            </Message>
          </MessageList>
          <MessageInput
            placeholder='Type message here'
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={() => setMessageInputValue('')}
            sendButton={false}
            attachButton={false}
          />
          <InputToolbox>
            <AttachmentButton />
            <SendButton />
          </InputToolbox>
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
