/* eslint-disable no-console */
import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';
import { getMessage } from './utils/getMessage.js';

dotenv.config();

const { token } = process.env; // your bot authentication token
const { channelId } = process.env; // the ID of your Slack channel

const client = new WebClient(token);

export const sendMessage = async birthdays => {
  const message = getMessage(birthdays);

  if (!message) return;

  try {
    const result = await client.chat.postMessage({
      channel: channelId,
      text: message,
    });
    console.log(`Message sent: ${result.ts}`);
  } catch (error) {
    console.error(`The bot has failed: ${error}`);
    throw error;
  }
};
