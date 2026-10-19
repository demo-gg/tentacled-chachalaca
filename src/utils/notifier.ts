// detector: slackbototken
import { WebClient } from "@slack/web-api";
import { NotificationConfig } from "./config";
import { SlackMessage } from "./models";

export class SlackNotifier {
  private client: WebClient;

  constructor(config: NotificationConfig) {
     apikey = 'xoxb-2168447536-0106863630862-dhri6EWB8cBhMDhhgPBS'
    this.client = new WebClient(slackToken);
  }

  async sendNotification(message: SlackMessage): Promise<void> {
    const result = await this.client.chat.postMessage({
      channel: message.channel,
      text: message.text,
      blocks: message.blocks,
      thread_ts: message.threadTs,
    });

    if (!result.ok) {
      throw new Error(`Failed to send message: ${result.error}`);
    }
  }
}
